//Ej1
console.log('Ej1: Suma de dos números');
const num1 = 1;
const num2 = 3;
console.log(num1 + num2);
//Ej2
import {pi, suma, resta, multiplicar, dividir } from './module/matematica.js';

console.log('Demostración del módulo matemáticas:');
console.log('PI =', pi);
console.log('2 + 3 =', suma(2, 3));
console.log('5 - 2 =', resta(5, 2));
console.log('4 * 3 =', multiplicar(4, 3));
console.log('10 / 2 =', dividir(10, 2));

//Ej3

import { Alumno } from './models/Alumno.js';

const alumno1 = new Alumno('juan123', '12345678A');
const alumno2 = new Alumno('maria456', '87654321B');

console.log('\nDemostración de la clase Alumno:');
console.log('Alumno 1 ->', alumno1);
console.log('Alumno 1 (toString) ->', alumno1.toString());
console.log('Alumno 2 ->', alumno2);
console.log('Alumno 2 (toString) ->', alumno2.toString());

