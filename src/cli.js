import readlineSync from 'readline-sync';


export default function getName (){
console.log("¡Bienvenido a Brain Games!")
const name = readlineSync.question('¿Cuál es tu nombre?');
console.log('¡Hola, ' + name + '!');
return name
}