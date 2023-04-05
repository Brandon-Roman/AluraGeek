import { validaInput } from './validaciones.js';

const inputs = document.querySelectorAll('input, textarea');


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validaInput(input.target);
  });
});
