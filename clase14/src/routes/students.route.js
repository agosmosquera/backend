import { Router } from "express";
import StudentsModel from "../models/students.model.js";

const router = Router();

router.get('/', async(req, res) => {
    try {
        const resultado = await StudentsModel.find();
        res.json({
            data:resultado,
            message: resultado.length ? "Lista de alumnos" : "No hay alumnos"
    });    
    }
    catch (error) {
        res.status(500).json({
            data: [],
        message: "Error al obtener la lista de alumnos",
        error: error
        })
    }
    
});

router.put("/:id", async (req, res) => {
    const {id} = req.params;

    try{
        const {name, lastname, course, dni, age, result} = req.body;
        if (!name || !lastname || !course || !dni || !age || !result) {
        return res.status(400).json({
            message: "Faltan datos requeridos"
            });
        }else {
                const user = {
                    name, lastname, course, dni, age, result
                }
                const resultado = await StudentsModel.findByIdAndUpdate(id, user);
            res.json({
                data : resultado,
                message: "Alumno modificado exitosamente"
            })
        }             
    } catch (error) {
        console.log(error)
        res.status(500).json({
        message: "Error al crear el Alumno",
        error: error
        })
    }
})

router.post("/", async (req, res) => {
    try{
        const {name, lastname, course, dni, age, result} = req.body;
        if (!name || !lastname || !course || !dni || !age || !result) {
        return res.status(400).json({
            message: "Faltan datos requeridos"
            });}
            else {
                const user = {
                    name, lastname, course, dni, age, result
                }
                const resultado = await StudentsModel.create(user);
            res.json({
                data : resultado,
                message: "Alumno creado exitosamente"
            })
        }             
    } catch (error) {
        console.log(error)
        res.status(500).json({
        message: "Error al crear el Alumno",
        error: error
        })
    }
});

router.get("/:id", async (req, res) => {
    const {id} = req.params;

    try {
        const resultado = await StudentsModel.find({email: id});
        res.json({
            data: resultado,
            message: resultado.length ? "Alumno encontrado" : "Alumno no encontrado"
        })
    } catch (error) {
            res.status(500).json({
                data: [],
                message: "Error al obtener el Alumno",
                error: error
            })
    }
});

router.delete("/:id", async (req, res) =>{
    const {id} = req.params;
    try {
        const resultado = await StudentsModel.findByIdAndDelete(id);
        res.json({
            data: resultado,
            message: "Alumno eliminado exitosamente"
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Error al eliminar el Alumno",
            error: error
        })
    }
});

export default router;


