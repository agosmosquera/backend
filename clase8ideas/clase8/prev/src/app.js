import express from "express";
import multer from "multer";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static("public"));

//give me 10 random users i need id,name, lastname and gender
const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    genero: "Masculino",
    edad: 30,
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    genero: "Femenino",
    edad: 25,
  },

  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
    genero: "Masculino",
    edad: 35,
  },
  {
    id: 4,
    nombre: "Juan",
    apellido: "Jacinto",
    genero: "Masculino",
  },
  {
    id: 5,
    nombre: "Maria",
    apellido: "Perez",
    genero: "Femenino",
    edad: 27,
  },
  {
    id: 6,
    nombre: "Pedro",
    apellido: "Gomez",
    genero: "Masculino",
  },
  {
    id: 7,
    nombre: "Ivan",
    apellido: "Ramirez",
    genero: "Masculino",
    edad: 28,
  },
  {
    id: 8,
    nombre: "Federico",
    apellido: "Vacca",
    genero: "Masculino",
    edad: 32,
  },
  {
    id: 9,
    nombre: "Javier",
    apellido: "Cohen",
    genero: "Masculino",
    edad: 33,
  },
];

app.get("/bienvenida", (req, res) => {
  res.send('<h1 style="color:red">Hola alumno de Coderhouse</h1>');
});

app.get("/usuario", (req, res) => {
  const usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    dni: 12345678,
  };
  res.json(usuario);
});

app.get("/saludar/:curso/:nombre/:apellido", (req, res) => {
  const { curso, nombre, apellido } = req.params;

  const { edad, nacionalidad, nota } = req.query;
  res.send(`Hola ${nombre} ${apellido}, bienvenido al curso de" ${curso}
  tienes ${edad} años eres de ${nacionalidad} y tu nota es de ${nota}`);
});
app.get("/usuarios/", (req, res) => {
  const { edad, genero } = req.query;
  let arregloTemporal = [];
  if (!edad && !genero) {
    res.json(usuarios);
  }
  if (!edad && genero) {
    arregloTemporal = usuarios.filter((usuario) => usuario.genero == genero);
    res.json(arregloTemporal);
  } else if (edad && !genero) {
    arregloTemporal = usuarios.filter((usuario) => usuario.edad == edad);
    res.json(arregloTemporal);
  } else {
    let myArray = [];
    myArray = usuarios.filter((usuario) => usuario.genero == genero);

    myArray.length > 0 &&
      myArray.forEach((dato) => {
        arregloTemporal.push(dato);
      });
    res.json(arregloTemporal);
  }
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
