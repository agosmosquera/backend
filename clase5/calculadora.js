import moment from "moment";

let nowTime = moment();
let fechaDeNacimiento = moment("2000-03-23", "YYYY-MM-DD");

console.log("Es una fecha valida", fechaDeNacimiento.isValid() ? "SI" : "NO");

console.log(moment())
console.log("Desde que naciste hasta hoy, pasaron", nowTime.diff(fechaDeNacimiento, "years"), "años");
console.log("Desde que naciste hasta hoy, pasaron", nowTime.diff(fechaDeNacimiento, "days"), "dias");


