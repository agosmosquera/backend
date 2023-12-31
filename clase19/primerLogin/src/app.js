import express from "express";
import handlebars from "express-handlebars";
import MongoStore from "connect-mongo";
import session from "express-session";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import LoginRoute from "./routes/login.routes.js";
import SignupRoute from "./routes/signup.routes.js";
import SessionRoute from "./routes/session.routes.js";
import UserModel from "./models/user.model.js";

import * as dotenv from "dotenv";

import __dirname from "./utils.js";
async function auth(req, res, next) {
  console.log("Authenticating user:", req.session.user, req.session.admin);
 
  // Verificar si el correo electrónico del usuario almacenado en la sesión existe en la base de datos
  const userInSession = req.session?.user;

  if (!userInSession) {
    return res.status(401).json("error de autenticación");
  }

  try {
    const user = await UserModel.findOne({ email: userInSession });
    
    if (user) {
      return next(); // Usuario autenticado
    } else {
      return res.status(401).json("error de autenticación");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("error de servidor");
  }

}

dotenv.config();
const app = express();
app.use(cookieParser("C0d3rS3cr3t"));

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 3000,
    }),
    secret: "codersecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/privado", auth, (req, res) => {
  res.render("topsecret", {});
});

const environment = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

environment();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/", LoginRoute);
app.use("/signup", SignupRoute);
app.use("/api/session/", SessionRoute);
app.use("/privado", SessionRoute);

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


server.on("error", (err) => {
  console.error(err);
});