import { Router } from "express";

const router = Router();
const mascotas = [];

router.get("/", (req, res) => { 
    res.json({message:"success", data: mascotas});
});

router.post("/", (req, res) => {
    mascotas.push(req.body);
    res.json({message:"mascota agregada", data: req.body});
});

export default router;