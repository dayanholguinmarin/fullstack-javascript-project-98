import readlineSync from 'readline-sync';


function obtenerNumeroAleatorio() {  
    return Math.floor(Math.random() * 20); 
}  

export default function FirstQuestion() {

    
    let result = 0;


    for (let i = 0; i < 3; i++) {  
        const numero = obtenerNumeroAleatorio();  //aqui ya llame esta funcion que hice arriba
        const esPar = numero % 2 === 0; //aqui se si es par o impar el divisible 
        const pregunta = readlineSync.keyInYNStrict(`Pregunta: ${numero}. ¿Es par? Responde "yes" si el número es par, de lo contrario responde "no".`);  //aqui con el keyinynstrict esto se importa me ayuda con el yes y el no

          
        if ((pregunta && esPar) || (!pregunta && !esPar)) {   
            result++;  
            console.log('¡Correcto!');   
        } else {  
            console.log('Incorrecto');  
        }  
    }  

    console.log(`Tu puntuación total es: ${result} de 3.`);  
}  
  






