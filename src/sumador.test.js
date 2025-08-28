import {sumar, dividir, multiplicar} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("dividir", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(6, 2)).toEqual(3);
  });
});

describe("multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    // Esta prueba fallará porque la función multiplicar no está implementada
    expect(multiplicar(3, 2)).toEqual(6);
  });
});

