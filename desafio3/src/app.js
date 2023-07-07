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

// desafio

const productos = [
  { 
      id: 1,
      producto : "jabon",
      marca : "liquido",
      precio: 30,
  },
  { 
    id: 2,
    producto : "jabon",
    marca : "solido",
    precio: 50,
  },
  { 
      id: 3,
      producto : "shampo",
      marca : "liquido",
      precio: 45,
  },
  { 
      id: 4,
      producto : "shampoo",
      marca : "solido",
      precio: 60,
  },
  { 
      id: 5,
      producto : "fideos",
      marca : "luccheti",
      precio: 21,
  },
  { 
    id: 6,
    producto : "fideos",
    marca : "marimar",
    precio: 23,
},
{ 
  id: 7,
  producto : "arroz",
  marca : "luccheti",
  precio: 20,
},
{ 
  id: 8,
  producto : "arroz",
  marca : "miramar",
  precio: 18,
},
{ 
  id: 9,
  producto : "polenta",
  marca : "luccheti",
  precio: 10,
},
{ 
  id: 10,
  producto : "jugo",
  marca : "sancor",
  precio: 3,
}
]

app.get('/bienvenida', (req, res) => {
  res.send('<h1 style="color:blue"> Hola cliente </h1>');
});


app.get('/productos', (req, res) => {
  res.json(productos);
})
