import petsModel from "../models/pets.js";

export default class Pets {
  async getAll() {
    return await petsModel.find({}).lean();
  }
  async getById(id) {
    return await petsModel.find({ _id: id });
  }

  async save(data) {
    const respuesta = petsModel.create(data);
    return respuesta;
  }

  update = async (id, data) => {
    const respuesta = petsModel.findByIdAndUpdate(id, data);
    return respuesta;
  };
  delete = async (id, data) => {
    const respuesta = petsModel.findByIdAndDelete(id);
    return respuesta;
  };
}