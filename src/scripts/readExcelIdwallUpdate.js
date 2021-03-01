// const Mongoose = require("mongoose");
// const Axios = require("axios");

// const fs = require("fs");

// const {
//   PROD: { MONGO_URI },
// } = require("../utils/config");

// const customers = require("../models/CustomerSchema");

// const instance = Axios.create({
//   baseURL: "https://api-v2.idwall.co",
//   headers: {
//     // Authorization: "8826977c-5c97-4ac1-8e22-a9d3f60c542f",
//     Authorization: "819ae788-04ed-4aa9-bc07-74cd00e06530",
//     "Content-Type": "application/json",
//   },
// });

// Mongoose.connect(MONGO_URI, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// Mongoose.connection.on("connected", async () => {
//   console.log("Conexão realizada com sucesso!");

//   let error = [];

//   const customerPending = await customers.find({
//     faceMatchPercentage: "Validação Pendente.",
//   });

//   for (const {
//     _id: idCustomer,
//     cpf: { number },
//   } of customerPending) {
//     try {
//       const {
//         data: {
//           result: {
//             dados: { relatorios },
//           },
//         },
//       } = await instance.get(`/pessoas/${number}`);

//       const { mensagem = undefined } = relatorios.find(
//         (el) => el.nome === "Pixter - Facematch e Serpro"
//       );

//       console.log(mensagem);

//       if (mensagem) {
//         const customerUpdate = await customers.updateOne(
//           { _id: idCustomer },
//           { $set: { faceMatchPercentage: mensagem } }
//         );
//         console.log(customerUpdate);
//         console.log(mensagem);
//       } else {
//         error.push(`Não encontrado: ${number} - ${idCustomer}`);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   fs.writeFile(
//     __dirname + "/outputs/semSusep.txt",
//     error
//       .map(
//         (el) => `CPF: ${el.cpf}, Susep: ${el.newBroker}, Situação: ${el.sit}`
//       )
//       .join("\n"),
//     function (err) {
//       if (err) return console.log(err);
//     }
//   );

//   console.log("BAZINGAAAAA!");
// });
