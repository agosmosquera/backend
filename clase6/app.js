import express from "express";

const app = express();


app.get('/bienvenida', (req, res) => {
    res.send('Hola alumno');
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

app.listen(8080, () => {
    console.log("el servidor escuchando en el uerto 8080")
});