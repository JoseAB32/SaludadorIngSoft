const fechaActual = new Date();
const hora = fechaActual.getHours();

function saludar(nombre) {
  if (hora < 12) {
    return `Buenos días, ${nombre}`;
  } else if (hora < 18) {
    return `Buenas tardes, ${nombre}`;
  } else {
    return `Buenas noches, ${nombre}`;
  }
}

export default saludar;
