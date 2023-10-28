import { Router } from "express";
import UserModel from "../models/user.model.js";

const router = Router();

function auth(req, res, next) {
  console.log(req.session);
  if (req.session?.user && username) {
    return next();
  }
  return res.status(401).json("error de autenticacion");
}

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Usuario y contraseña recibidos:", username, password);
  const result = await UserModel.findOne({
    email: username,
    password,
  });

  if (!result) {
    return res.status(401).json({
      respuesta: "error",
    });
  } else {
    req.session.user = result.email; // Establecer el correo electrónico en la sesión
    req.session.admin = true;
    console.log("ok");
    // Redirigir al usuario a la ruta "/privado" después de iniciar sesión exitosamente
    res.redirect("/privado");
  }
  // console.log(req.body);
  // const { username, password } = req.body;

  // const result = await UserModel.find({
  //   email: username,
  //   password,
  // });
  // console.log(result);
  // if (result.length === 0)
  //   return res.status(401).json({
  //     respuesta: "error",
  //   });
  // else {
  //   req.session.user = username;
  //   req.session.admin = true;
  //   console.log("ok")
  //  res.redirect("/privado");
    
  // }
});

router.post("/signup", async (req, res) => {
  const { first_name, last_name, age, email, password } = req.body;

  const result = await UserModel.create({
    first_name,
    last_name,
    age,
    email,
    password,
  });

  if (result === null) {
    return res.status(401).json({
      respuesta: "error",
    });
  } else {
    req.session.user = email;
    req.session.admin = true;
    res.status(200).json({
      respuesta: "ok",
    });
  }
});

router.get("/privado", auth, (req, res) => {
  console.log("Acceso a la ruta privada.");
  res.render("topsecret", {});
});

export default router;