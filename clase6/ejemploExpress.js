import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo desde express');
})

app.listen(8080, () => {
    console.log("el servidor escuchando en el uerto 8080 desde express")
});