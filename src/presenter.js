import saludar from "./saludador.js";
import textos from "./textos.js";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const edad = document.querySelector("#edad");
let selectedIdioma = document.querySelector('input[name="Idioma"]:checked')?.value || "es";
const formIdioma = document.querySelector("#idioma");

formIdioma.addEventListener("change", (event) => {
  
  selectedIdioma = event.target.value;
  console.log(`Idioma seleccionado: ${selectedIdioma}`);
  document.querySelector('label[for="espanol"]').textContent = textos[selectedIdioma].espanol;
  document.querySelector('label[for="ingles"]').textContent = textos[selectedIdioma].ingles
  document.querySelector("h1").textContent = textos[selectedIdioma].saludo;
  document.querySelector('label[for="primer-numero"]').textContent = textos[selectedIdioma].nombre;
  document.querySelector('label[for="Genero"]').textContent = textos[selectedIdioma].genero;
  document.querySelector('label[for="Masculino"]').textContent = textos[selectedIdioma].masculino;
  document.querySelector('label[for="Femenino"]').textContent = textos[selectedIdioma].femenino;
  document.querySelector('label[for="Otro"]').textContent = textos[selectedIdioma].otro;
  document.querySelector('label[for="primer-numero"]:last-of-type').textContent = textos[selectedIdioma].edad;
  document.querySelector('#Saludar').value = textos[selectedIdioma].boton;
});



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Nombre = nombre.value;

  const Genero = document.querySelector('input[name="Genero"]:checked')?.value || "Otro";

  const Edad = edad.value;

  const idioma = document.querySelector('input[name="Idioma"]:checked')?.value || "es"

  console.log(Nombre, Genero);

  div.innerHTML = "<p> HOLA " + saludar(Nombre, Genero, Edad, idioma, idioma) + "</p>";
});
