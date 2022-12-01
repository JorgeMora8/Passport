export const renderizarProductos = (data) => { 
    const html = data.map((element, idx) => { 
        return(
            `
            Nombre del producto: ${element.nombre}. Precio: ${element.precio}. tipo producto: ${element.tipo_producto}
            `
        )}).join(" "); 
       return html
}


