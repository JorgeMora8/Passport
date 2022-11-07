import express from "express"; 
import {requireAuthentication} from "../middleware/auth.js";
import {procesDATA} from "../config/configDATA.js"; 


const infoRouter = express.Router(); 



infoRouter.get("/",requireAuthentication, (req,res) => { 
    res.render("info", {data:procesDATA});
})

export { infoRouter }