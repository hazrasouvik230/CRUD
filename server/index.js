const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const UserModel = require("./models/Users");

dotenv.config();

const app = express();
app.use(cors({
    origin: ["http://crud-orcin-one.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log(`MongoDB is connected successfully!`)
}).catch((error) => {
    console.error(`MongoDB connection error: ${error}`)
})

app.get("/", (req, res) => {
    UserModel.find({})
    .then((users) => res.json(users))
    .catch((error) => res.json(error))
})

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id: id})
    .then((users) => res.json(users))
    .catch((error) => res.json(error))
})

app.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
    .then((users) => res.json(users))
    .catch((error) => res.json(error))
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then((result) => res.json(result))
    .catch((error) => res.json(error))

})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})