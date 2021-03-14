const express = require("express");
const UserController = require("../controllers/UserController")

const api = express.Router();

api.get("/saludar", (req, res)=> {
    console.log("llegó a la ruta saludar...")
});

api.post("/", UserController.create);

module.exports = api;
