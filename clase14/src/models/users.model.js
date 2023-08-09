import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

const UserModel = mongoose.model(userCollection, userSchema);

export default UserModel;