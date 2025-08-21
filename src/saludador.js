import textos from "./textos";


const fechaActual = new Date();
const hora = fechaActual.getHours();

function mesnajeGenero(genero, edad, selectedIdioma) {
  if (genero === "Masculino") {
    if (edad > 30) {
      return textos[selectedIdioma].placerMasculinoAdulto;
    }
    return textos[selectedIdioma].placerMasculinoJoven;
  } else if (genero === "Femenino") {
    if (edad > 30) {
      return textos[selectedIdioma].placerFemeninoAdulto;
    }
    return textos[selectedIdioma].placerFemeninoJoven;    
  }
    if (edad > 30) {    
      return textos[selectedIdioma].placerOtroAdulto;
    }
    return textos[selectedIdioma].placerOtroJoven;
}


function saludar(nombre, genero, edad, selectedIdioma) {

    console.log(selectedIdioma);

    const mensaje = mesnajeGenero(genero, edad, selectedIdioma);
    if (hora < 12) {
        return `${textos[selectedIdioma].manana} ${nombre}, ${mensaje}`;
    } else if (hora < 18) {
        return `${textos[selectedIdioma].tarde} ${nombre}, ${mensaje}`;
    } else {
        return `${textos[selectedIdioma].noche} ${nombre}, ${mensaje}`;
    }
}

export default saludar;
