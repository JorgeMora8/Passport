export default class Usuario { 
    
    //=>Declaring private variables; 
    #username
    #password
    #id
    #name
    #phoneNumber
    #age
    #location

    constructor({username, password, id, name, phoneNumber, age, location}){ 

    this.#username = username; 
    this.#password = password; 
    this.#id = id; 
    this.#phoneNumber = location; 
    this.#location = location; 
    this.#name = name; 
    this.#location = location

    }


    asDTO(){ 
        return Object.freeze({ 
            username : this.#username, 
            password : this.#password, 
            id:this.#id, 
            name : this.#name, 
            phoneNumber : this.#phoneNumber, 
            age: this.#age, 
            location: this.#location 
        })
       
    }
}

