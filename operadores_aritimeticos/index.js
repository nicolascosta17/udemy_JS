/* 
*Aritimético
* + Adição / Concatenação
* - /
*  
*/

const { parse } = require("postcss");

// Adição
let num1 = 5;
let num2 = 10;
console.log(num1 + num2);

// Concatenação
num1 = '5';
num2 = 10;
console.log(num1 + num2);

// Subtração
num1 = 5;
num2 = 10;
console.log(num1 - num2);

// Multiplicação
num1 = 5;
num2 = 10;
console.log(num1 * num2);

// Potênciação
num1 = 2;
num2 = 10;
console.log(num1 ** num2);

// Resto da divição
num1 = 10;
num2 = 3;
console.log(num1 % num2);

// Conversão de string para number inteiro
num1 = 5;
num2 = parseInt('10');
console.log(num1 + num2);

// Conversão de string para number real
num1 = 5;
num2 = parseFloat('10');
console.log(num1 + num2);

// Conversão de string para number sem distinção de real ou inteiro
num1 = 5;
num2 = Number('10.2');
console.log(num1 + num2);
