import express from 'express';
import {ProductManager} from "./productManager.js";

const app = express();
const PORT = 8082;
const productManager = new ProductManager("productos.json");
let productos =[]

app.get('/', (req, res) => {
  res.send('Hola mundoooooo');
});

app.listen(PORT, () => {
  console.log(`servidor en el puerto ${PORT}`);
});

app.get('/productos', async (req, res) => {
    const {limit} = req.query;
    
    try {
        let response = await productManager.getProducts()
        //console.log(response, response)
        if (limit) {
            let tempArray = response.slice()
            res.send(response)
        } else {
            res.json(response)
        }
        res.json(response)
    }catch (err) {
        console.error(err)
    }
  })