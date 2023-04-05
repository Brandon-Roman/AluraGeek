import { productoServices } from "../svc/producto.service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => { 
    evento.preventDefault();
    const imagen = document.querySelector("[data-tipo=imagen]").value;
    const categoria = document.querySelector("[data-tipo=categoria]").value;
    const nombreProducto = document.querySelector("[data-tipo=nombreProducto]").value;
    const precio = document.querySelector("[data-tipo=precio]").value;
    const mensaje = document.querySelector("[data-tipo=mensaje]").value;
    productoServices.crearProducto(imagen, categoria, nombreProducto, precio, mensaje)
    .then(()=> {
        window.location.href = "/html/todos-productos.html"
    })
    .catch((err) =>console.log(err));
});