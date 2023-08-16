import { userModel } from "../models/users.js"

export default class Users {
    constructor() {
       // console.log(`Working users with Database persistence in mongodb`)
    }
    getAll = async () => {
        
        
        let users = await userModel.find();
        return users.map(user=>user.toObject())
    }
    saveUser = async (user) => {
        let result = await userModel.create(user);
        return result;
    }
}