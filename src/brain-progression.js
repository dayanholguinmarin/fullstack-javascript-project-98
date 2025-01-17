import readlineSync from 'readline-sync';
import _ from 'lodash';
import saludos from "../src/cli.js";

const name = saludos()


export default function progresion() {

  for (let i = 0; i < 3; i++) {

    const progresionItems = _.random(5, 10)
    let progresionNumber = _.random(1, 10)
    const progresionsalto = _.random(1, 5)

    const progresionContinua = [];

    for (let i = 1; i <= progresionItems; i += 1) {


      if (i === 1) {
        progresionContinua.push(progresionNumber);
      } else {
        progresionNumber += progresionsalto;
        progresionContinua.push(progresionNumber);
      }
    }

    const reemplazoItem = _.random(0, progresionContinua.length - 1);
    const resultadoCorrecto = progresionContinua[reemplazoItem];
    progresionContinua[reemplazoItem] = '..';



    const pregunta = readlineSync.question(`Pregunta: ${progresionContinua.join(', ')}. ¿Qué número falta en la progresión?`);
    if (parseInt(pregunta) === resultadoCorrecto) {
      console.log("correcto")
    } else {
      console.log(`${pregunta} es la respuesta incorrecta: la respuesta correcta es: ${resultadoCorrecto}.`)
      console.log(`¡Intentémoslo de nuevo, ${name}!`)
      return
    }
  }
};

