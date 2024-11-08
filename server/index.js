// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const UserModel = require("./models/Users");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());


// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//     console.log(`MongoDB is connected successfully!`)
// }).catch((error) => {
//     console.error(`MongoDB connection error: ${error}`)
// })

// app.get("/", async (req, res) => {
//     try {
//         const users = await UserModel.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({error: "Failed to fetch users."})
//     }
// });

// app.get("/getUser/:id", async (req, res) => {
//     try {
//         const user = await UserModel.findById(req.params.id);
//         if(!user) {
//             return res.status(404).json({error: "User not found"})   
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({error: "Failed to fetch user."})
//     }
// })

// app.put("/updateUser/:id", async (req, res) => {
//     const {name, email, age} = req.body;
//     try {
//         const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {name, email, age}, {new: true, runValidators: true});
//         if(!updateUser) {
//             return res.status(404).json({error: "User not found."})
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Failed to update user" });
//     }
// });

// app.delete("/deleteUser/:id", async (req, res) => {
//     try {
//         const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
//         if(!deleteUser) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to delete user" });
//     }
// });

// app.post("/createUser", async (req, res) => {
//     try {
//         const newUser = await UserModel.create(req.body);
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to create user" });
//     }
// });

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on http://localhost:${process.env.PORT}`);
// })





const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const UserModel = require("./models/Users");

dotenv.config();

const app = express();
app.use(cors());
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