const fs = require("fs");
fs.writeFileSync("archivo.txt","Hola");

if (fs.existsSync("archivo.txt")) {
    let contenido = fs.readFileSync("archivo.txt", "utf-8");
    console.log(contenido);

fs.appendFileSync("archivo.txt", " mas contenido");

contenido = fs.readFileSync("archivo.txt", "utf-8");
console.log(contenido);
fs.unlinkSync("archivo.txt");
/*
*/
}