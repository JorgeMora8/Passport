import express from "express";
import {getHome} from "../Controllers/rootController.js"; 
import {requireAuthentication} from "../middleware/auth.js";

const HomeRoot = express.Router(); 

HomeRoot.get("/", requireAuthentication, getHome)

export { 
    HomeRoot
}