 import {fork} from "child_process";


const randomNumberController = (req, res) => {
    let cantidadRandomNumber; 

    let keys = Object.keys(req.query)
    //=>En caso de no agregar ninguna query; (VALOR POR DEFECTO)
    if(keys.length === 0){ 
        cantidadRandomNumber = 100000000
    }else{ 
    
        let convertQuery = parseInt(Object.values(req.query)); 
    
        //=>En caso de agregar una palabra(ERROR)
        if(isNaN(convertQuery)){ 
            res.json({Error:"El dato ingresado no es un numero"})
        }else{ 
            //=>caso exitosos
            cantidadRandomNumber = convertQuery
        }

    }



    const childProcess = fork("./API/randomNumberProcess.js"); 
    childProcess.send(cantidadRandomNumber); 

    childProcess.on("message", (data) => { 
        res.send(data)
    })
    
 
 }

export { randomNumberController }

