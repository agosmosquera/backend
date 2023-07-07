import express from 'express';
import {ProductManager} from "./productManager.js";

const app = express();
const PORT = 8080;
const productManager = new ProductManager("./productManager.js");

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(PORT, () => {
  console.log(`servidor en el puerto ${PORT}`);
});