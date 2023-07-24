import express from "express";
import userRouter from "./router/user.router.js";
import petRouter from "./router/pet.router.js";
import fileRouter from "./router/files.router.js";
import bodyParser from "body-parser";
import { __dirname } from "./utils.js";
import path from "path";
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

function auth(req, res, next) {
  const { user } = req.body;
  if (user == "admin") {
    next();
  } else {
    res.status(401).json({ message: "No estas autorizado", time: req.hora });
  }
}
function logTime(req, res, next) {
  req.hora = Date.now();
  next();
}
function otroMDW(req, res, next) {
  console.log("aqui vamos ahora" + req.hora);
  next();
}
app.use("/api/user", logTime, auth, userRouter);
app.use("/api/pet", logTime, otroMDW, petRouter);
app.use("/api/file", fileRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
