import moment from "moment";

let nowTime = moment();
let fechaDeNacimiento = moment("2000-03-23", "YYYY-MM-DD");

console.log("Es una fecha valida", fechaDeNacimiento.isValide() ? "SI" : "NO");


