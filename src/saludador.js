const fechaActual = new Date();
const hora = fechaActual.getHours();

function mesnajeGenero(genero, edad) {
  if (genero === "Masculino") {
    if (edad > 30) {
      return "un placer tenerte aquí Sr.";
    }
    return "un placer tenerlo aquí";
  } else if (genero === "Femenino") {
    if (edad > 30) {
      return "un placer tenerte aquí Sra.";
    }
    return "un placer tenerla aquí";    
  }
    if (edad > 30) {    
      return "un placer tenerle aquí Estimado";
    }
    return "un placer tenerle aquí";
}


function saludar(nombre, genero, edad) {

    const mensaje = mesnajeGenero(genero, edad);
    if (hora < 12) {
        return `Buenos días ${nombre}, ${mensaje}`;
    } else if (hora < 18) {
        return `Buenas tardes ${nombre}, ${mensaje}`;
    } else {
        return `Buenas noches ${nombre}, ${mensaje}`;
    }
}

export default saludar;
