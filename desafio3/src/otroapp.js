import express from 'express';
import {ProductManager} from "./productManager.js";

const app = express();
const PORT = 8082;
const productManager = new ProductManager("productos.json");
let productos =[]

app.get('/', (req, res) => {
  res.send('Hola mundoooooo');
});

app.get('/productos:pid', async (req, res) => {
  const {pid} = req.params;

  let product = await productManager.getProductById(pid);
  if (product) {
    res.json( {message : "correcto", data :product});
      } else{
        res.json({
          message: "le producto solicitado no existe "
        })
      }
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
          let tempArray = response.filter((dat, index) => index < limit);
            /* let tempArray = response.map((dat, index) => {
              return index < limit && dat;
            })
            */
            res.json({data: tempArray, limit: limit, quantity:tempArray.length});
        } else {
            res.json({data: response, limit:false, quantity:response.length});
        }
        res.json(response)
    }catch (err) {
        console.error(err)
    }
  });

  