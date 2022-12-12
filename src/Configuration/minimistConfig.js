import parseArg from "minimist";

const config = parseArg(process.argv.slice(2), {default:{p:8080, m:"fork", DDBB:"mongo"}, alias:{p:"PORT", m:"MODO", DDBB:"DDBB"}}); 

const PORT = config.PORT; 
const MODO = config.MODO; 
const DDBB = config.DDBB; 


export { 
    PORT, 
    MODO, 
    DDBB
}