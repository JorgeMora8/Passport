import {getRandmonNumber} from "../recurso/getRandomNumber.js"

process.on("message", (data)=>{
    let resultado = getRandmonNumber(data); 
    process.send(resultado)
})