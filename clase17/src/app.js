import express from "express";
import mongoose from "mongoose";
import orderModel from "./models/order.js";
import { generateRandomName } from "./randomNames.js";
import { studentModel } from "./models/students.js";
import studentRouter from "./routes/students.route.js";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express()

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentRouter);
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

const environment = async () => {
    await mongoose.connect(
      "mongodb+srv://agosmosquera23:1234@cluster0.mynfmyx.mongodb.net/pizzeria"
    )
    /*
    let students = await studentModel.paginate({gender:"F"},{limit:20,page:2})
    console.log(students);
    
    let students = await studentModel.aggregate([
        { $sort: { grade: -1 } },
    
        { $group: { _id: "$gender", promedio: { $avg: "$grade" } } },
        { $sort: { promedio: -1 } },
    
    ])
    console.log(students);

    let myData = [];
  for (let x = 0; x <= 100; x++) {
    myData.push(generateRandomName());
  }
  console.log(myData);
  let result = await studentModel.insertMany(myData);

    //busqueda por size, ordenandolos por cantidad
    
    let orders = await orderModel.aggregate([
        {$match: {size:"medium"}},
        {$group: {_id:"$name", totalQuantity:{$sum:"$quantity"}}},
        {$sort:{totalQuantity: -1}}, 
    {$group: {_id:1, orders:{$push:"$$ROOT"}}},
    {$project: {
        "_id": 0,
        order: "$orders"
    }},
    {
        $merge:{
            into: "reports"
        }
    }
    ]);
    console.log(orders);
    */

    /*let result = await orderModel.insertMany([
        {
            name: "4 quesos",
            size: "small",
            price: 20,
            quantity: 5,
            date: new Date().toString()
        },
        {
            name: "Fugazza",
            size: "medium",
            price: 50,
            quantity: 3,
            date: new Date().toString()
        },
        {
            name: "Jamon",
            size: "medium",
            price: 40,
            quantity: 6,
            date: new Date().toString()
        },
        {
            name: "Roquefort",
            size: "small",
            price: 25,
            quantity: 1,
            date: new Date().toString()
        },
        {
            name: "Rucula",
            size: "medium",
            price: 40,
            quantity: 6,
            date: new Date().toString()
        }
        
    ]) */
    //console.log(result);

}


environment();
const server = app.listen(3434, () => console.log(`Listening on PORT ${3434}`));