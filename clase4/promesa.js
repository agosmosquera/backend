import fs from 'fs';
const operacionesAsincronas = async() => {
    await fs.promises.writeFile("ejemploPromesa.txt", "luissss");
    let resultado = await fs.promises.readFile("ejemploPromesa.txt", "utf-8");
    console.log(resultado)
    await fs.promises.appendFile("ejemploPromesa.txt", " algo mas")
    resultado =await fs.promises.readFile("ejemploPromesa.txt", "utf-8")
    console.log(resultado)
    //await fs.promises.unlink("ejemploPromesa.txt")
}
operacionesAsincronas();

//es importante en funciones asincronas usar try catch para enterarnos de los errores