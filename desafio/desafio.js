class ProductManager {
    products;
    constructor() {
      this.products = [];
    }
    static correlativoId = 0;
    addProduct({title, description, price, thumbnail, code, stock}) {
        constructor();
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
      let codeExists = this.products.some((dato) => dato.code == code);
  
      if (codeExists) {
        throw new Error("El codigoooooo existe por favor verificar");
      } else {
        ProductManager.correlativoId++;
        const newProduct = {
          id: ProductManager.correlativoId,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        this.products.push(newProduct);
      }
  
    }
    getProducts() {
      return this.products;
    }
    getProductById(id) {
      let product = this.products.find((dato) => dato.id === id);
  
      if (product !== undefined) {
        return product;
      } else {
        return "No existe el producto solicitado.";
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
// product.addProduct(item);
console.log(product.getProductById(1));
// console.log(product.getProductById(2));
   