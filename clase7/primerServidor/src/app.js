import { Express } from "express";
const  app = Express();
const PORT = 8080;

app.get("/", (req, res) =>{
    res.send("holaaaaa servidor 8080");
});

app.listen(PORT, () => {
 console.log("servidor corriendo en el puerto" + PORT)
});