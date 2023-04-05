export function validaInput (input) {
  const tipoInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.add(".span-error");
    input.parentElement.querySelector(".span-error").innerHTML = "";
  } else {
    input.parentElement.classList.remove('span-error');
    input.parentElement.querySelector(".span-error").innerHTML = 
    mostrarError(tipoInput, input);
  };
}


const tipoErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
];

const mensajeError ={

  imagen: {
      valueMissing: "el campo nombre no puede estar vacio", // valueMissing retorna true si un valor no fué inserido en un campo obligatorio, es decir, lanzará un mensaje para el usuario de 'campo obligatorio' .
      patternMismatch: "No debe superar los 50 caracteres"
    },
  categoria: {
    valueMissing:"este campo no puede estar vacio, algunas de nuestras opciones son: Consolas, Star Wars, Diversos",
  },
  nombreProducto:{
    valueMissing:"este campo no puede estar vacio",
    patternMismatch:"Maximo 20 caracteres y no puede contener caracteres especiales"
  },
  precio:{
    valueMissing:"este campo no puede estar vacio",
    typeMismatch:"Solo puede contener numeros y el signo $"
  },
  Descripcion:{
    valueMissing:"este campo no puede estar vacio",
    CustomError:"la descripción debe contener entre 4 a 150 caracteres"
  },
  email: {
      valueMissing: "el campo correo no puede estar vacio",
      typeMismatch: "el correo no es valido",
      patternMismatch: "El correo es incorrecto",
    },
  password: {
      valueMissing:"el campo contraseña no puede estar vacio",
      patternMismatch:"contraseña incorrecta",
    },
  nombre:{
    valueMissing:"este campo no puede estar vacio",
    patternMismatch:"el campo debe contener entre 4 a 30 caracteres"
  },
  mensaje:{
      valueMissing:"este campo no puede estar vacio",
      CustomError:"el mensaje debe contener entre 1 a 120 caracteres"
    },
};


function mostrarError (tipoInput, input) {
  let mensaje = "";
  tipoErrores.forEach((error) => {
    if(input.validity[error]) {
      console.log(tipoInput, error);
      console.log(input.validity[error]);
      console.log(mensajeError[tipoInput][error]);
      mensaje = mensajeError[tipoInput][error];
    }
  });

  return mensaje
}