
      
const myList =(data) => {
    if(data.length === 0 ||data==undefined) {
        console.log("LA lista esta vacia");
    }    else {
        data.forEach((elemento) => {
            console.log(elemento);
        });
        console.log("La longitud de la lista es" + data.length);
    }
};
myList();
    myList ([1, 2, 3, 4, 5, 6]);

    const objetos = [ 
        {manzanas:3,
            peras:8,
            bananas:5,
            panes:4
        },
        {huevos:3,
            jugos:8,
            melones:5,
            harina:4
        }
        ];

    let productos = [];
    objetos.forEach (dato => {
        productos.push(...new Set(Object.keys(dato)));
    });
    console.log(productos)
    console.log(productos.length)

    objetos.forEach (dato => {
        
        let temporalArray = Object.keys(dato);
        temporalArray.forEach((temporalDato) => {
            if (!productos.includes(temporalDato)) {
        productos.push(temporalDato);} 
    });
});
    console.log(productos)
    console.log(productos.length)