import express from "express";
import mongoose from "mongoose";
import { userModel } from "./models/users.model.js";
import { studentModel } from "./models/students.model.js";
import { courseModel } from "./models/courses.model.js";
import * as dotenv from "dotenv";
dotenv.config();

//import Loader from "./loader.js";

const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
  console.log("Error en el servidor:", error);
});

const environment = async () => {
  await mongoose.connect(
    "mongodb+srv://agosmosquera23:1234@cluster0.mynfmyx.mongodb.net/users"
  )
  .then (() => {
    console.log("Conectada a la base de datos");
    //Loader()
    
  })

 
  
 // let student = await studentModel.findOne({ _id: "64d56abe0fc89ac20b6394a2" });
  
//let student = await studentModel.find();

  //console.log(student);


   /*let student = await studentModel
    .findOne({ _id: "64d56abe0fc89ac20b6394a2" })
    .populate("courses.course");
student.courses.push({
    course: "64d56be8ffd6b1e5f8599b74",
  })
  let result = await studentModel.updateOne(
    { _id: "64d56abe0fc89ac20b6394a2" },
    student
    );
    */
  /* let student = await studentModel
    .findOne({ _id: "64d56abe0fc89ac20b6394a2" })
    .populate("courses.course");
student.courses.push({
    course: "64d56be8ffd6b1e5f8599b74",
  });
    let student = await studentModel.findOne({ _id: "64d56abe0fc89ac20b6394a2" });
*/

  //console.log(student);
  //console.log(JSON.stringify(student, null, "\t"));

  /*let student = await studentModel.findOne({ _id: "64d56abe0fc89ac20b6394a2" });
  student.courses.push({
    course: "64cc36ad89ce234116344e09",
  });
  let result = await studentModel.updateOne(
    { _id: "64d56abe0fc89ac20b6394a2" },
    student
  );*/
   /* //Ejemplo de indexacion
  let respuesta = await userModel
    .find({ last_name: "Itzcak" })
    .explain("executionStats");
  console.log(respuesta);

  //creacion de usuario en db
  /*await studentModel.create({
    first_name: "Hilda",
    last_name: "Coruño",
    email: "hilda@gmail.com",
    gender: "Female",
  });
  
  
  await courseModel.create({
    title: "curso backend",
    description: "es un curso muy completo con nodejs y express",
    difficulty: 5,
    topics: [
      "Javascript",
      "servidores",
      "motores de plantilla",
      "express",
      "middleware",
      "base de datos",
    ],
    professor: "Luis",
  });
  */
};

environment();