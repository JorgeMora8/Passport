// import {validarCorreo, validarNombre, validarMensaje} from "./ValidacionesMensajes.js";


export default class Mensajes { 
    #name
    #mail
    #message 
    #id
    #nickName
    constructor({id, name, nickName, mail, message}){ 
        this.#name = name; 
        this.#mail = mail
        this.#message = message; 
        this.#id = id; 
        this.#nickName = nickName; 
    }


    asDTO(){ 
        let datosMensaje = { 
            name:this.#name, 
            mail: this.#mail, 
            message: this.#message, 
            id:this.#id, 
            nickName: this.#nickName
        }

        return datosMensaje
    }
}


