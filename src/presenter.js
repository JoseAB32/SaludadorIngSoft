import saludar from "./saludador.js";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Nombre = nombre.value;

  const Genero = document.querySelector('input[name="Genero"]:checked')?.value || "Otro";

  console.log(Nombre, Genero);

  div.innerHTML = "<p> HOLA " + saludar(Nombre, Genero) + "</p>";
});
