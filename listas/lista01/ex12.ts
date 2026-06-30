// Leia uma temperatura em Celsius e converta para Fahrenheit: F = C × 9 / 5 + 32.

// recebe a temperatura em célcius
const celcius: number = Number(prompt("Digite a temperatura em célcius"));

// faz a conversão para farenheint
const farenheit: number = celcius * 1.8 + 32;

// retorna o valor
alert(farenheit);
