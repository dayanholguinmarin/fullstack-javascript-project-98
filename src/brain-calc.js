import readlineSync from 'readline-sync';

import saludos from "../src/cli.js";

const name = saludos ()

function matematicaAleatoria(min, max) {  
   return Math.floor(Math.random() * (max - min + 1)) + min;  //esta formula con math es la que me da numeros aleatorios
    
}  

export default function calcular() {

 for (let i = 0; i < 3; i++) {  
        const numero1 = matematicaAleatoria(1, 100);  // y asi es como siempre debo llamar esos numeros aleatorios
        const numero2 = matematicaAleatoria(1, 100);
        const operadores = ['+', '-', '*'];  
        const operador = operadores[Math.floor(Math.random() * operadores.length)]; 
        

   let resultadoCorrecto;
   switch (operador) {
     case '+': 
       resultadoCorrecto = numero1 + numero2;
       break;
       case '-': 
       resultadoCorrecto = numero1 - numero2;
       break;
       case '*': 
       resultadoCorrecto = numero1 * numero2;
       break;
   }
       
   
   const pregunta =readlineSync.question(`Pregunta: ${numero1} ${operador} ${numero2} . ¿Cuál es el resultado de la expresión?`);
   
   if (parseInt(pregunta) === resultadoCorrecto) {
     console.log("correcto")
   } else {
      console.log(`incorrecto : la respuesta correcta es: ${resultadoCorrecto}.`)
      console.log(`¡Intentémoslo de nuevo, ${name}!`)
      return 
   }
 }  
}
