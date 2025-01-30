import readlineSync from 'readline-sync';

import saludos from './cli.js';

const name = saludos();

function maximoDivisorAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcularMCD(a, b) { // algoritmo de euclides es el que saca el maximo comun divisor
  let a1 = a;
  let b1 = b;
  while (b1 !== 0) {
    const temp = b1;
    b1 = a1 % b1;
    a1 = temp;
  }
  return a1;
}

export default function MaxComunDivisor() {
  for (let i = 0; i < 3; i += 1) {
    const divisor1 = maximoDivisorAleatorio(1, 100);
    const divisor2 = maximoDivisorAleatorio(1, 100);
    const pregunta = readlineSync.question(`Pregunta: ${divisor1} ${divisor2} . Encuentra el máximo común divisor de los números dados.`);
    const mcd = calcularMCD(divisor1, divisor2);

    if (parseInt(pregunta, 10) === mcd) {
      console.log('correcto');
    } else {
      console.log(`${pregunta} es una respuesta incorrecta ;(. La respuesta correcta era ${mcd}.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}
