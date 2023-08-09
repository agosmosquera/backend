import express from "express";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/view.router.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/", viewsRoute);

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
