import http from "http";

const server = http.createServer((solicitud, respuesta) => {
    respuesta.end("Hola mundo");
});
server.listen(8080, () =>{
    console.log("Servidor escuchando en el puerto 8080")
});