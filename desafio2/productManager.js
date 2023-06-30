import utils from "./utils.js";
import crypto from "crypto";

export class ProductManager {
    constructor(path) {
    this.path = path;
    this.products = [];
  }
    //static correlativoId = 0;
    async addProduct(title, description, price, thumbnail, code, stock) {
        if (
        title == undefined ||
        description == undefined ||
        price == undefined ||
        thumbnail == undefined ||
        code == undefined ||
        stock == undefined
      ) {
        throw new Error("Todos los campos son obligatorios");
      }
      try {
          let data = await utils.readFile(this.path);
          this.products = data?.length > 0 ? data : [];
        }
      catch(error){
        console.log(error);
      }
      
      let codeExists = this.products.some((dato) => dato.code == code);
  
      if (codeExists) {
        throw new Error("El codigo existe por favor verificar");
      } else {
        ProductManager.correlativoId++;
        const newProduct = {
          id: crypto.randomUUID(),
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        this.products.push(newProduct);
        try{
          await utils.writeFile(this.path, this.products);
        }
        catch(error){
          console.log(error);
        }
      }
  
    }
    async getProducts() {
      try {
        let data = await utils.readFile(this.path);
        return data?.length> 0 ? this.products: "no hay registros todavia";
      }
    catch(error){
      console.log(error);
    }
      }

     async getProductById(id) {
      try {
        let data = await utils.readFile(this.path);
        this.products = data?.length > 0 ? data : [];
        let product = this.products.find((dato) => dato.id === id);
  
      if (product !== undefined) {
        return product;
      } else {
        return "No existe el producto solicitado.";
      }
      }    catch(error){
      console.log(error);
    }
      
    }
  }
  
  const item = {
    title: "Producto prueba",
    description: "Este es un producto de prueba",
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
};
const product = new ProductManager();
console.log(product.getProducts());
product.addProduct(item);
console.log(product.getProducts());
product.addProduct(item);
console.log(product.getProductById(1));
console.log(product.getProductById(2));
   

export default{
    ProductManager,
}