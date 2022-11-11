import express from "express"; 
import {requireAuthentication} from "../middleware/auth.js";
import {procesDATA} from "../config/configDATA.js"; 
import compression from "compression"


const infoRouter = express.Router(); 

//=>Agregado un console.log

//=>Usanndo compresion Gzip
// infoRouter.get("/",requireAuthentication,compression(), (req,res) => { 
//     // console.log(procesDATA)
//     res.render("info", {data:procesDATA});
// })

infoRouter.get("/",compression(), (req,res) => { 
    console.log(procesDATA)
    res.render("info", {data:procesDATA});
})


export { infoRouter }
















// infoRouter.get("/",compression(), (req,res) => { 
//     console.log(procesDATA)
//     res.render("info", {data:procesDATA});
// })