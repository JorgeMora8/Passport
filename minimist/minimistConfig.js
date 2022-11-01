import parseArg from "minimist";

const config = parseArg(process.argv.slice(2), {default:{p:8080}, alias:{p:"PORT"}} )
const PORT = config.PORT; 

export { PORT }