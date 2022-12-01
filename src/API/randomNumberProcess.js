import {getRandomNumber} from "../recurso/getRandomNumber.js"

process.on("message", async (data)=>{
    let resultado = await getRandomNumber(data); 
    process.send(resultado)
})