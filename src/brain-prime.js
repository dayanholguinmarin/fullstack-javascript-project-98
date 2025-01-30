import readlineSync from 'readline-sync';
import _ from 'lodash';
import saludos from './cli.js';

const name = saludos();

export default function numberPrime() {
  for (let i = 0; i < 3; i += 1) {
    const primoRandom = _.random(1, 100);

    let contador = 0;

    for (let j = 1; j <= primoRandom; j += 1) {
      if (primoRandom % j === 0) {
        contador += 1;
      }
    }

    const esPrimo = (contador === 2) && (primoRandom > 1);
    const resultadoCorrecto = esPrimo ? 'yes' : 'no';

    const pregunta = readlineSync.question(`Pregunta: ${primoRandom}. Responde "yes" si el número dado es primo. De lo contrario, responde "no".`);
    if (pregunta === resultadoCorrecto) {
      console.log('correcto');
    } else {
      console.log(`${pregunta} es la respuesta incorrecta: la respuesta correcta es: ${resultadoCorrecto}.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
}
