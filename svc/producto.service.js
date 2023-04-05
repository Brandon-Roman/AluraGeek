const listaProductos = () => fetch("http://localhost:3000/posts").then((respuesta) => respuesta.json()); //abre conexion con la url por lo que genera una promesa, al completarse se recibe en return con formato json

//solo hace comunicacion con el servidor recibe respuesta y me lo genera en un json

const crearProducto = (imagen, categoria, nombreProducto, precio, mensaje) => {
    return fetch("http://localhost:3000/posts",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({imagen, categoria, nombreProducto, precio, mensaje, id: uuid.v4() }),
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",   
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/posts/${id}`).then(( respuesta) => respuesta.json()
    );
};

const actualizarProducto = (imagen, categoria, nombreProducto, precio, id) => {
    return fetch(`http://localhost:3000/posts/${id}`,  {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ imagen, categoria, nombreProducto, precio, mensaje }),
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};

