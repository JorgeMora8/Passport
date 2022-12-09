import {
    ValidarImagen, 
    validarPrecio, 
    validarTipoProducto, 
    validarNombreProducto, 
     
     } from "./ValidacionesProductos.js"

export default class Producto { 
    
    //=>Declaring private variables; 
    #name
    #price
    #image
    #type_of_product
    #id

    constructor({name, price, image, type_of_product, id}){ 

    this.#name = name; 
    this.#price = price; 
    this.#image = image; 
    this.#type_of_product = type_of_product; 
    this.#id = id
    }


    asDTO(){ 
        return Object.freeze({ 
            name : this.#name, 
            price : this.#price, 
            image: this.#image, 
            type_of_product : this.#type_of_product, 
            id: this.#id
        })
       
    }
}


