const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true, min: 0}
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;