import { Router } from "express";

const router = Router();
const usuarios = [];

router.get("/", (req, res) => {
  res.json({ message: "success", data: usuarios });
});

router.post("/", (req, res) => {
  usuarios.push(req.body);
  res.json({ message: "usuario agregado", data: req.body });
});

export default router;
