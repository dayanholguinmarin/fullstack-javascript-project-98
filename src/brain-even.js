import readlineSync from 'readline-sync';
import saludos from "../src/cli.js";

const name = saludos()

function obtenerNumeroAleatorio() {  
    return Math.floor(Math.random() * 20); 
}  

export default function FirstQuestion() {


    for (let i = 0; i < 3; i++) {  
        const numero = obtenerNumeroAleatorio();  //aqui ya llame esta funcion que hice arriba
        const esPar = numero % 2 === 0; //aqui se si es par o impar el divisible 
        const resultadoCorrecto = esPar ? 'yes' : 'no';
        const pregunta = readlineSync.question(`Pregunta: ${numero}. ¿Es par? Responde "yes" si el número es par, de lo contrario responde "no".`);  

          
        if (pregunta === resultadoCorrecto) {   
              
            console.log('¡Correcto!');   
        } else {  
            console.log(`${pregunta} es la respuesta incorrecta: la respuesta correcta es: ${resultadoCorrecto}.`)
       console.log(`¡Intentémoslo de nuevo, ${name}!`)
       return   
        }  
    }  

    console.log(`¡Felicidades, ${name}!`);  
};  
  






