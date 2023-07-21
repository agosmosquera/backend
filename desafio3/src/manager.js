import {ProductManager} from "./productManager.js";
import {__dirname} from "./utils.js"

//const {ProductManager} = productManager;

let myFirstStore = new ProductManager("productos.json");
myFirstStore.getProducts().then((data) => console.log(data))
//let mySecondStore = new ProductManager("./productos2.json");
 /* myFirstStore.addProduct(
    "producto prueba",
    "este es un producto de prueba",
    200,
    "http://imagen.jgp",
    "abcde1234" + Math.floor(Math.random() * (100 - 1) + 1),
    25
); */
myFirstStore.addProduct(
  "producto prueba 2",
  "este es un producto de prueba 2",
  300,
  "http://imagen.jgp",
  "12548518" + Math.floor(Math.random() * (100 - 1) + 1),
  25
);

  myFirstStore.getProducts().then((data) => console.log(data));


//console.log("desde getProducts", myFirstStore.getProducts());
//console.log("desde getProducts", myFirstStore.getProducts(1));

