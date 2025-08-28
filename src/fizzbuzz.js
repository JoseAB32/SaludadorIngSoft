function convertirFizzBuzz(numero) {
  if(numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";  
  }

  if (numero % 5 === 0) {
    return "Buzz";
  }

  if (numero % 3 === 0) {
    return "Fizz";
  }

  numero = String(numero);  
  return numero;
}

function cadena(num) {  
  let resultado = [];
  for (let i = 1; i <= num; i++) {
    resultado.push(convertirFizzBuzz(i));
  }
  return resultado.join(", ");
}

export {convertirFizzBuzz, cadena};