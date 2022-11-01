function getRandmonNumber(numero){ 
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

export {getRandmonNumber}



