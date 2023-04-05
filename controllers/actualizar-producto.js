import { productoServices } from "../svc/producto.service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        window.location.href = "/html/error.html";   
    }

    const imagen = document.querySelector("[data-tipo=imagen]");
    const categoria = document.querySelector("[data-tipo=categoria]");
    const nombreProducto = document.querySelector("[data-tipo=nombreProducto]");
    const precio = document.querySelector("[data-tipo=precio]");
    const mensaje = document.querySelector("[data-tipo=mensaje]");

    try {
        const posts = await productoServices.detalleProducto(id);
        if(posts.imagen && posts.categoria && nombreProducto && precio && mensaje){
            imagen.value = posts.imagen;
            categoria.value = posts.categoria; 
            nombreProducto.value = posts.nombreProducto; 
            precio.value = posts.precio; 
            mensaje.value = posts.mensaje; 
        }else{
            throw new Error();
        }

    }catch(error){
        window.location.href="/html/error.html";
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => { 
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-tipo=imagen]").value;
    const categoria = document.querySelector("[data-tipo=categoria]").value;
    const nombreProducto = document.querySelector("[data-tipo=nombreProducto]").value;
    const precio = document.querySelector("[data-tipo=precio]").value;
    const mensaje = document.querySelector("[data-tipo=mensaje]").value;
    clientServices.actualizarCliente(imagen, categoria, nombreProducto, precio, mensaje, id).then(() => {
        window.location.href="/hmtl/todos-productos.html"
    })
});