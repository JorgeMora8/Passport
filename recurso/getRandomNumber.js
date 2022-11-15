function getRandomNumber(numero){ 
    let numerosRepetidos = {}; 

    for(let n=0; n<= numero; n++){ 
        let numeroRandom = Math.floor(Math.random()*1000); 

        if(numerosRepetidos[numeroRandom]){ 
            numerosRepetidos[numeroRandom] += 1
        }else{ 
            numerosRepetidos[numeroRandom] = 1
        }
    }

    return numerosRepetidos
}


// function getRandomNumber(numero){ 
//     return new Promise((resolve, reject) => {

//         let numerosRepetidos = {}; 

//             for(let n=0; n<= numero; n++){ 
//                 let numeroRandom = Math.floor(Math.random()*1000); 
        
//                 if(numerosRepetidos[numeroRandom]){ 
//                     numerosRepetidos[numeroRandom] += 1
//                 }else{ 
//                     numerosRepetidos[numeroRandom] = 1
//                 }}

//                 resolve(numerosRepetidos)

//     })
// }

export {getRandomNumber}

// let name = "jorge"; 

// if(typeof(name) === "string"){
//     console.log("its a string")
// }



