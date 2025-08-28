function convertirFizzBuzz(numero) {
  if (numero % 5 === 0) {
    return "Buzz";
  } 
  if (numero % 3 === 0) {
    return "Fizz";
  }
  numero = String(numero);  
  return numero;
}

export {convertirFizzBuzz};