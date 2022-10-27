const express = require("express")
const {getHome} = require("../Controllers/rootController.js"); 
const {requireAuthentication} = require("../middleware/auth.js")

const HomeRoot = express.Router(); 

HomeRoot.get("/", requireAuthentication, getHome)

module.exports = { 
    HomeRoot
}