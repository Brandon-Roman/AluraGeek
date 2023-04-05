import { productoServices } from "../svc/producto.service.js";


const crearNuevaLinea = (imagen, categoria, nombreProducto, precio, mensaje, id) => {
    const linea = document.createElement("ul")
    const contenido =  `
        <ul class="productos__lista" data-table>
        <div class="botones__edicion">
            <button class="prductos__eliminar"><a href="../screens/agregar-producto.html?id=${id}><img class="imagen__editar" src="../img/Vector (1).svg"></a></button>
            <button class="prductos__editar" id="${id}"><img src="../img/Vector (2).svg"></button>
        </div> m${categoria}
      <li><img class="imagen__tamaño">${imagen}</li>
      <li><h3 class="productos__descripcion">${nombreProducto}</h3></li>
      <li class="productos__item--precio">${precio}</li>
      <li>${mensaje}</li>
    </ul>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServices.eliminarProducto(id).then((respuesta) => {
            console.log(respuesta);
        })
    });

    return linea
};

const table = document.querySelector("[data-table]")

productoServices.listaProductos().then((data) => {
    data.forEach(({ imagen, categoria, nombreProducto, precio, mensaje, id}) => {
        const nuevaLinea = crearNuevaLinea(imagen, categoria, nombreProducto, precio, mensaje, id);
        table.appendChild(nuevaLinea);
    });
})
