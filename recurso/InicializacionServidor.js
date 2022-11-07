//=> Modo que sera inicializado el servidor. [CLUSTER O FORK]; 

import cluster from "cluster"; 
import crearServidor from "../src/server.js";
import {MODO, PORT} from "../minimist/minimistConfig.js"

import os from "os"; 
const numCPUs = os.cpus().length; 

//=>Se activa el round robin manual [windows por defecto esta desactivado]
cluster.schedulingPolicy = cluster.SCHED_RR

async function inicio(){
    if(MODO == "cluster"){
        if(cluster.isPrimary){
            console.log(`Proceso primario ${process.pid} se esta ejecutando`); 
            for(let p=0; p<numCPUs; p++){
                cluster.fork(); 
            }
            cluster.on("exit", (worker, code, signal) => {
                console.log(`Worker ${process.pid} a finalizado inesperadamente. Levantando Worker sustituto`); 
                cluster.fork(); 
            })
        }else{ 
            crearServidor(PORT);
        }
    }else{
        crearServidor(PORT)
    }
}; 

inicio()