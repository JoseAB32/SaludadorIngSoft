import {convertirFizzBuzz} from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia devolver el mismo numero si no es multiplo de 3 ni de 5", () => {
    expect(convertirFizzBuzz(7)).toEqual("7");
  });

  it("deberia devolver el mismo numero si no es multiplo de 3 ni de 5", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });
});