import { Router } from "express";

const router = Router();
const mascotas = [];

router.get("/", (req, res) => {
  throw new Error("algo salio mal");
  res.status(500).json({ message: "success", data: mascotas });
});

router.post("/", (req, res) => {
  mascotas.push(req.body);
  res.json({ message: "usuario agregado", data: req.body });
});

export default router;
