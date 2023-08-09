import { Router } from "express";
import { users } from "../data.js";

const router = Router();
let dataUsuarios = [];
router.get("/", async (req, res) => {
  res.render("users", { title: "Home", name: "Joaquin" });
});

router.get("/saludo", async (req, res) => {
  const { name } = req.query;
  res.render("users", { title: "Saludo", name: name, style: "saludo.css" });
});

router.get("/alumnos", (req, res) => {
  const { role } = req.query;
  const isRole = role && role === "admin" ? true : false;
  res.render("alumnos", {
    title: "Lista de alumnos",
    users: dataUsuarios,
    isRole,
    style: "alumnos.css",
  });
});

router.get("/register", (req, res) => {
  res.render("register", { title: "Registro", style: "register.css" });
});
router.post("/register", (req, res) => {
  const { name, lastname, email, password } = req.body;
  const newUser = {
    name,
    lastname,
    email,
    password,
  };
  dataUsuarios.push(newUser);
  res.json({ message: "usuario agregado", data: newUser });
});

export default router;