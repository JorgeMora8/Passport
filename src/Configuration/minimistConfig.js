import parseArg from "minimist";

const config = parseArg(process.argv.slice(2), {default:{p:8080, m:"fork"}, alias:{p:"PORT", m:"MODO"}}); 

const PORT = config.PORT; 
const MODO = config.MODO; 


export { 
    PORT, 
    MODO    
}