// const XLSX = require("xlsx");
// const Mongoose = require("mongoose");

// const fs = require("fs");

// const {
//   PROD: { MONGO_URI },
// } = require("../utils/config");

// const orders = require("../models/OrderSchema");
// const brokers = require("../models/BrokerSchema");

// const workbook = XLSX.readFile(__dirname + "/template/trocaSusep.xlsx");
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
//       susepAtual: row["Susep"],
//       susepNovo: row["NOVO VENDEDOR"],
//       orderId: row["CÃ³digo"],
//     });
//   };

//   const data = xlData.map(dataMapping);
//   // console.log(data);
//   let errorSusep = [];

//   for (const prop of data) {
//     const broker = await brokers.findOne({ susep: prop.susepNovo });

//     if (broker) {
//       const order =
//         // await orders.findOne({ _id: prop.orderId });
//         await orders.updateOne(
//           { _id: prop.orderId },
//           { representative: broker.user }
//         );

//       console.log("Order", order);
//     } else {
//       errorSusep.push(prop);
//     }
//   }

//   fs.writeFile(
//     __dirname + "/outputs/semSusep.txt",
//     errorSusep
//       .map((el) => `Order: ${el.orderId}, Susep: ${el.susepNovo}`)
//       .join("\n"),
//     function (err) {
//       if (err) return console.log(err);
//     }
//   );

//   console.log("BAZINGAAAAA!");
// });
