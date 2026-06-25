// Leia dois números e mostre a soma, a subtração, a multiplicação, a divisão e o resto.

// recebe tudo que precisa pra funcionar do usuário
const numUm: number = Number(prompt("Qual o primeiro valor?"));
const numDois: number = Number(prompt("Qual o segundo valor?"));

// calcula tudo
const soma1: number = numUm + numDois;
const sub: number = numUm - numDois;
const multi: number = numUm * numDois;
const div: number = numUm / numDois;

// retorna os valores para o usuário
alert(
  `soma: ${soma1}; subtração: ${sub}; multiplicação: ${multi}; divisão: ${div}`
);
