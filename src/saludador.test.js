import saludar from "./saludador.js";
import textos from "./textos.js";


describe("saludar", () => {
  it("saluda por la mañana en español", () => {
    const resultado = saludar("Ana", "Femenino", 25, "es", 8);
    expect(resultado).toContain(textos.es.manana);
  });

  it("saluda por la noche en español", () => {
    const resultado = saludar("Ana", "Femenino", 25, "es", 15);
    expect(resultado).toContain(textos.es.tarde);
  });

});