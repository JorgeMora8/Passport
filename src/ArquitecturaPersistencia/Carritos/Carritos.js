export default class Carrito { 
    
    //=>Declaring private variables; 
    #name
    #price
    #image
    #type_of_product
    #id
    #brand

    constructor({name, price, image, type_of_product, id, brand}){ 

    this.#name = name; 
    this.#price = price; 
    this.#image = image; 
    this.#type_of_product = type_of_product; 
    this.#id = id
    this.#brand = brand
    }


    asDTO(){ 
        return Object.freeze({ 
            name : this.#name, 
            price : this.#price, 
            image: this.#image, 
            type_of_product : this.#type_of_product, 
            id: this.#id, 
            brand : this.#brand
        })
       
    }
}


