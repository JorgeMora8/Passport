
const socket = io(); 




//=> Función para limpiar los input; 
const limpieza = () => { 
    document.getElementById("nombre").value = ""; 
    document.getElementById("precio").value = ""; 
    document.getElementById("img").value = ""; 
}

const limpiezaChat = () => { 
    document.getElementById("nombreMensaje").value="";
    document.getElementById("apellidoMensaje").value="";
    document.getElementById("edadMensaje").value="";
    document.getElementById("aliasMensaje").value="";
    document.getElementById("avatarMensaje").value="";
    document.getElementById("mensaje").value="";
}

//=>Enviar productos al contenedor
const agregarProducto = () => { 
    const producto = { 
        name:document.getElementById("nombre").value,
        price:document.getElementById("precio").value, 
        image:document.getElementById("img").value, 
        type_of_product:document.getElementById("tipo_producto").value, 
        brand: document.getElementById("marca_producto").value
    }

    socket.emit("nuevoProducto", producto); 
    limpieza()
    return false
}

//=>Renderiza los productos del contenedor
const renderizarProductos = (data) => { 
    const html = data.map(({name, price, image, id}, idx) => { 
        return(
            `
            <div class="productoItem">
                <h3 class="nombreItem">${name}</h3>
                <b class="precioItem">${price}$</b>
                <img src="${image}" width="200px" class="imgItem"/>
                <button value="${id}" class="btnAgregarProducto" onClick="nuevoProducto(${id})">Agregar</button>
            </div>
            `
        )}).join(" "); 
        document.getElementById("productosContenedor").innerHTML=html; 
}

function nuevoProducto(id){ 
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: 'Acabo de agregar un producto al carrito',
        footer: '<a href="/carrito">Ir a ver carrito'
      })

   socket.emit("idNuevoProductoCarrito", id)

}


//=>Logica Mensajes; 
const agregarMensaje = () => { 

   //=>Estructurando el mensaje; 
    const mensaje = { 
            name:document.getElementById("nombreMensaje").value,
            lastName:document.getElementById("apellidoMensaje").value,
            age:document.getElementById("edadMensaje").value,
            mail:document.getElementById("mailMensaje").value,
            nickNames:document.getElementById("aliasMensaje").value,
            avatar:document.getElementById("avatarMensaje").value,
            message : document.getElementById("mensaje").value
    }
            socket.emit("nuevoMensaje", mensaje)
            // console.log(mensaje)
            limpiezaChat()
        return false
}

//=>Filtrado
const filtradoProductos = (data) => { 
    console.log("Filtrado de productos")
    let marcaSeleccionada = document.getElementById("selectMarca").value
    let precioSeleccinado = document.getElementById("selectPrecio").value
    let productoSeleccionado = document.getElementById("selectProducto").value
    console.log(data)

    console.log(marcaSeleccionada, precioSeleccinado, productoSeleccionado)

    return false

}

const renderizarChat = (data) => { 

    const html = data.map(({name, mail, message}, idx) => { 
        return (
            `<div class="mensajeItem">
            <h1 class="contenidoMensaje">Nombre: ${name}</h1>
            <h2 class="contenidoMensaje">Apellido: ${mail}</h2>
            <p class="mensaje">${message}</p>
            </div>`
        )
    }).join(" "); 
    document.getElementById("chatContenedor").innerHTML = html; 

    console.log(data)
} 

socket.on("productos", (data) => {
    renderizarProductos(data)
})

socket.on("chat", (data) => { 
    renderizarChat(data)
})

