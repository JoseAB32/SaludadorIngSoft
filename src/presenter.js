import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Nombre = nombre.value;

  div.innerHTML = "<p> HOLA " + Nombre + "</p>";
});
