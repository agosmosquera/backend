import mongoose from "mongoose";

const studentsCollection = "students";

const studentsSchema = new mongoose.Schema({
    name: {type: String,
    requiere : true},
    lastname: {type: String,
        requiere : true},
    age: {type: Number,
        requiere : true},
    dni: {type: String,
        requiere : true, 
    unique: true},
    course: {type: String,
        requiere : true},
    result: {type: Number,
        requiere : true}
});

const StudentsModel = mongoose.model(studentsCollection, studentsSchema);

export default StudentsModel;