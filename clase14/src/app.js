import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
 import userRouter from "./routes/users.route.js"
 import studentRouter from "./routes/students.route.js"

dotenv.config();


 const app = express();
 const PORT = process.env.PORT || 8080;
 const MONGO_URI = process.env.MONGO_URI;
 mongoose.set('strictQuery', false);

 //conexion a la bd
let dbConnect = mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
 });

 dbConnect.then(
    ()  => {
        console.log("Conexion a la base de datos exitosa")
    },
    (error) => {
        console.log("Error en la conexion a la base de datos"),
        console.log(error)
    }
 );

 //middleware

 app.use(express.json());
 app.use(express.urlencoded({extended : true}));

 //rutas
app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);

 app.listen(PORT, () => {
    console.log('escuchando en el puerto ' + PORT);     
 })