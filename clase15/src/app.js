import express from "express";
import cors from "cors";
import __dirname from "./utils.js";
//import usersRouter from "./routes/users.router.js";
//import coursesRouter from "./routes/courses.router.js";
import viewsRouter from "./routes/views.router.js";
import petsRouter from "./routes/pets.router.js";


import handlebars from "express-handlebars";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;
const connection = mongoose.connect(MONGO_URI);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Middlewares

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", viewsRouter);
app.use("/api/pets", petsRouter);

//app.use("/api/users", usersRouter);

//app.use("/api/courses", coursesRouter);

const server = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

