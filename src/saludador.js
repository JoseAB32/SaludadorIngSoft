const fechaActual = new Date();
const hora = fechaActual.getHours();

function mesnajeGenero(genero) {
  if (genero === "Masculino") {
    return "un placer tenerlo aquí";
  } else if (genero === "Femenino") {
    return "un placer tenerla aquí";    
  }
    return "un placer tenerle aquí";
}


function saludar(nombre, genero) {

    const mensaje = mesnajeGenero(genero);
    if (hora < 12) {
        return `Buenos días ${nombre}, ${mensaje}`;
    } else if (hora < 18) {
        return `Buenas tardes ${nombre}, ${mensaje}`;
    } else {
        return `Buenas noches ${nombre}, ${mensaje}`;
    }
}

export default saludar;
