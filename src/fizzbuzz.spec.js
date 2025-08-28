import {convertirFizzBuzz} from "./fizzbuzz.js";

describe("fizzbuzz", () => {
  it("deberia devolver el mismo numero si no es multiplo de 3 ni de 5", () => {
    expect(convertirFizzBuzz(7)).toEqual("7");
  });

  it("deberia devolver el mismo numero si no es multiplo de 3 ni de 5", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });

  it("deberia devolver Fizz si es 3", () => {
    expect(convertirFizzBuzz(3)).toEqual("Fizz");
  });

  it("deberia devolver Fizz si es multiplo de 3", () => {
    expect(convertirFizzBuzz(6)).toEqual("Fizz");
  });

  it("deberia devolver Buzz si es 5", () => {
    expect(convertirFizzBuzz(5)).toEqual("Buzz");
  });

  it("deberia devolver Buzz si es multiplo de 5", () => {
    expect(convertirFizzBuzz(10)).toEqual("Buzz");
  });

  it("deberia devolver FizzBuzz si es multiplo de 3 y de 5", () => {
    expect(convertirFizzBuzz(15)).toEqual("FizzBuzz");
  });
});