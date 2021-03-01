// const XLSX = require("xlsx");

// const fs = require("fs");
// const { dirname } = require("path");

// const workbook = XLSX.readFile(__dirname + "/template/incentivo.xlsx");
// const sheet_name_list = workbook.SheetNames;

// const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// const dataMapping = (row) => {
//   const obj = {
//     ...row,
//     cod_susep: row["cod_susep / LOGIN"],
//     email: row["E-mail"],
//   };

//   delete obj["cod_susep / LOGIN"];
//   delete obj["E-mail"];

//   return obj;
// };

// const data = xlData.map(dataMapping);
// const dataSetting = new Set();

// const dataRefin = [];
// // console.log(data);

// for (const prop of data) {
//   dataSetting.add(prop.email);
// }

// for (const setting of dataSetting) {
//   let dataFilter = data.filter((item) => item.email === setting);

//   dataRefin.push({
//     email: setting,
//     credenciais: dataFilter
//       .map((ele) => `${ele.senha}:${ele.cod_susep}`)
//       .join("<br>"),
//   });
// }

// fs.writeFile(
//   __dirname + "/outputs/orderOutput.json",
//   JSON.stringify(dataRefin),
//   "utf8",
//   (err) => {
//     if (err) throw err;
//   }
// );

// console.log("BAZINGAAAAA!");
