import {ProductManager} from "./productManager.js";

//const {ProductManager} = productManager;

let myFirstStore = new ProductManager("./productos.json");
let mySecondStore = new ProductManager("./productos2.json");
// myFirstStore.addProduct(
//     "producto prueba",
//     "este es un producto de prueba",
//     200,
//     "http://imagen.jgp",
//     "abcde1234" + Math.floor(Math.random() * (100 - 1) + 1),
//     25
// );
// mySecondStore.addProduct(
//   "producto prueba 2",
//   "este es un producto de prueba",
//   200,
//   "http://imagen.jgp",
//   "abcde1234" + Math.floor(Math.random() * (100 - 1) + 1),
//   25
// );

// myFirstStore.addProduct(
//     "Pelota",
//     "De futbol",
//     9.99,
//     "http://imagen.jgp",
//     "123c",
//     23
//   );

  myFirstStore.getProducts().then((data) => console.log("get products", data));
  // myFirstStore.updateProduct("043e8de7-f91b-4227-b5c7-dba8d2787b4e",{
  //   title: "auto",
  //         description: "fiat 500",
  //         price: 800,
  //         thumbnail: "foto.jpg",
  //         code: "autoauto"
  // }).then((data) => console.log("resultado", data))


//console.log("desde getProducts", myFirstStore.getProducts());
//console.log("desde getProducts", myFirstStore.getProducts(1));

