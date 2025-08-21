import saludar from "./saludador.js";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const edad = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Nombre = nombre.value;

  const Genero = document.querySelector('input[name="Genero"]:checked')?.value || "Otro";

  const Edad = edad.value;

  console.log(Nombre, Genero);

  div.innerHTML = "<p> HOLA " + saludar(Nombre, Genero, Edad) + "</p>";
});
