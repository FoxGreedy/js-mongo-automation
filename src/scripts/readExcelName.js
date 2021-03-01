// const XLSX = require("xlsx");
// const Mongoose = require("mongoose");

// const fs = require("fs");

// const {
//   HOMOLOG: { MONGO_URI },
// } = require("../utils/config");

// const orders = require("../models/OrderSchema");
// const customers = require("../models/CustomerSchema");

// const workbook = XLSX.readFile(__dirname + "/template/nomeExtrai.xlsx");
// const sheet_name_list = workbook.SheetNames;

// Mongoose.connect(MONGO_URI, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// Mongoose.connection.on("connected", async () => {
//   console.log("Conexão realizada com sucesso!");

//   const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

//   const dataMapping = (row) => {
//     return new Object({
//       orderId: row["Codigo"],
//       nomeErrado: row["Razao Social"],
//       nomeCorreto: row["Nome Certo"],
//       status: row["Status"],
//     });
//   };

//   const data = xlData.map(dataMapping);
//   let noOrder = [];

//   for (const prop of data) {
//     const order = Mongoose.isValidObjectId(prop.orderId)
//       ? await orders.findOne({ _id: prop.orderId })
//       : null;

//     if (order) {
//       const customer = await customers.updateOne(
//         { _id: order.customer },
//         { fullName: prop.nomeCorreto }
//       );

//       // const customer = await customers.findOne({ _id: order.customer });

//       if (order.status === "ordered")
//         await orders.updateOne({ _id: prop.orderId }, { status: "perfil" });

//       // console.log(customer.fullName, String(prop.nomeCorreto));
//       console.log(customer);
//     } else {
//       noOrder.push(prop);
//     }
//   }

//   fs.writeFile(
//     __dirname + "/outputs/orderNoEncounter.txt",
//     noOrder
//       .map((el) => `Order: ${el.orderId}, Nome: ${el.nomeErrado}`)
//       .join("\n"),
//     function (err) {
//       if (err) return console.log(err);
//     }
//   );

//   console.log("BAZINGAAAAA!");
// });
