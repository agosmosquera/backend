import express from "express";

const app = express();

const usuarios = [
    { 
        id: 1,
        nombre : "Juan",
        apellido : "Perez",
        gender : "masculino",
        edad : 30,
    },
    { 
        id: 2,
        nombre : "Juana",
        apellido : "Perez",
        gender : "femenino",
        edad : 29,
    },
    { 
        id: 3,
        nombre : "Ivan",
        apellido : "Martin",
        gender : "masculino",
        edad : 28,
    },
    { 
        id: 4,
        nombre : "Nicolas",
        apellido : "Diaz",
        gender : "masculino",
        edad : 35,
    },
    { 
        id: 5,
        nombre : "Rosina",
        apellido : "Perez",
        gender : "femenino",
        edad : 32,
    }
]

app.get('/bienvenida', (req, res) => {
    res.send('<h1 style="color:blue"> Hola alumno </h1>');
});

app.get('/usuario', (req, res) => {
    const usuario = {
        nombre : "Juan",
        apellido : "Perez",
        edad : 30,
        dni : 123456
    }
    res.json(usuario);
})

app.get("/saludar/:curso/:nombre/:apellido", (req, res) => {
    const {nombre, apellido, curso} = req.params;
    const {edad, dni} = req.query;
    res.send(`Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}, tenes ${edad} años y tu dni es ${dni}`);
});

app.get("/usuarios/", (req, res) => {
    const {edad, gender} = req.query;
    let arregloTemporal = [];
    if(!edad&&!gender){
        res.json(usuarios);
    }
    if (!edad && gender){
        arregloTemporal = usuarios.filter((usuario) => usuario.gender == gender);
        res.json(arregloTemporal);
    } else if (edad && !gender){
        arregloTemporal = usuarios.filter((usuario) => usuario.edad == edad);
        res.json(arregloTemporal);
    } else {
        let myArray = [];
        myArray = usuarios.filte((usuario) => usuario.gender == gender)
    }
    if (gender){
        
       
        myArray.length > 0 && myArray.forEach(dato => {
            arregloTemporal.push(dato)
        })
        res.json(arregloTemporal);
    }
   
})

app.listen(8080, () => {
    console.log("el servidor escuchando en el uerto 8080")
});