import express from "express";
import cookierParser from "cookie-parser";
import handlebars from "express-handlebars";
import session from "express-session";
import FileStore from "session-file-store";
import MongoStore from "connect-mongo"
import * as dotenv from "dotenv"

import __dirname from "./utils.js";
//import cookieParser from "cookie-parser";
dotenv.config()
const app = express();
const fileStorage = new FileStore(session);
//*****cookiess */
app.use(cookierParser("C0d3rS3cr3t"));
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL || 8080
/*session con filestorage 

app.use(
  session({
    store: new fileStorage({
      // path: __dirname + "./sessions",
      path: "./sessions",
      ttl: 3600,
      retries: 0
    }),
    secret: "codersecret",
    resave: true,
    saveUninitialized: true,
  })
);

*/
//session con mongo db 

app.use(
  session({
    store: MongoStore.create({
      mongoUrl : MONGO_URL,
      mongoOptions : {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      ttl: 15
    }),
    secret: "codersecret",
    resave: false,
    saveUninitialized: false,
  })
);
//session con mongo db 

// res seteamos cookies
//req obtenemos cookies
//res eliminamos cookies

app.use(express.static("public"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

function auth(req, res, next) {
  if (req.session?.user === "pepe" && req.session?.admin) {
    return next();
  }
  return res.status(401).json("error de autenticacion");
}
//*****cookiess */
app.get("/cookies", (req, res) => {
  res.render("cookies", {});
});
app.get("/", (req, res) => {
  res.render("login", {});
});
app.get("/setCookie", (req, res) => {
  const { name, lastname } = req.query;
  //guardamos una cookie
  res
    .cookie(
      "CoderCookie",
      JSON.stringify({
        nombre: name,
        apellido: lastname,
      }),
      {
        maxAge: 30000,
        signed: true,
      }
    )
    .send("Cookie");
});

app.get("/getCookies", (req, res) => {
  //obtenemos las cookies del sitio
  // cookier sin firmar
  //res.send(req.cookies);
  //cookies firmadas
  res.send(req.signedCookies);
});
app.get("/deleteCookies", (req, res) => {
  //obtenemos las cookies del sitio
  res.clearCookie("CoderCookie").send("Se  elimino la cookie");
});

//*****session */
app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Se  visitó el sitio ${req.session.counter} veces.`);
  } else {
    req.session.counter = 1;
    res.send(`Bienvenido, es su primera vez por aca`);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send("Logout ok!");
    } else {
      res.json({
        status: "Error al cerrar sesion",
        body: err,
      });
    }
  });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (username !== "pepe" || password !== "pepepass")
    return res.status(401).json({
      respuesta: "error"
    });

  req.session.user = username;
  req.session.admin = true;
  res.status(200).json({
    respuesta: "ok",
  });
});

app.get("/privado", auth, (req, res) => {
  res.render("topsecret", {});
});
app.listen(3434, () => console.log(`Listening on PORT ${3434}`));