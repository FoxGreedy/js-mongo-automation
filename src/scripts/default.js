const XLSX = require("xlsx");
const Mongoose = require("mongoose");

const fs = require("fs");

const {
  PROD: { MONGO_URI },
} = require("../utils/config");

const orders = require("../models/OrderSchema");
const brokers = require("../models/BrokerSchema");
const customers = require("../models/CustomerSchema");

const workbook = XLSX.readFile(__dirname + "/template/trocaSusepNome.xlsx");
const sheet_name_list = workbook.SheetNames;

Mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

Mongoose.connection.on("connected", async () => {
  console.log("Conexão realizada com sucesso!");

  const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  // console.log(xlData);

  const dataMapping = (row) => {
    let dataCpf = row["CPF"].toString();

    for (i = dataCpf.length; i < 11; i++) {
      dataCpf = "0" + dataCpf;
    }

    return new Object({
      cpf: dataCpf,
      oldBroker: row["DE"],
      newBroker: row["PARA"],
    });
  };

  const data = xlData.map(dataMapping);
  let errorSusep = [];

  console.log(data);
  for (const prop of data) {
    const broker = await brokers.findOne({ susep: prop.newBroker });

    if (broker) {
      const customer = await customers.findOne({
        cpf: { number: prop.cpf },
      });
      if (customer) {
        const ordersReturn = await orders.find({ customer: customer._id });

        for (const order of ordersReturn) {
          // const ord = await orders.updateOne(
          //   { _id: order._id },
          //   { representative: broker.user }
          // );
          // console.log(ord);
          // console.log("Atualizado", customer.fullName, order._id);
        }
      } else {
        errorSusep.push({ ...prop, sit: "Cliente não existe" });
      }
    } else {
      errorSusep.push({ ...prop, sit: "Representante não existe" });
    }
  }

  fs.writeFile(
    __dirname + "/outputs/semSusep.txt",
    errorSusep
      .map(
        (el) => `CPF: ${el.cpf}, Susep: ${el.newBroker}, Situação: ${el.sit}`
      )
      .join("\n"),
    function (err) {
      if (err) return console.log(err);
    }
  );

  console.log("BAZINGAAAAA!");
});
