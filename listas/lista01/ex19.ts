// Leia um saque (inteiro) e mostre quantas notas de 100, 50, 20 e 10 entregar, usando o menor número de notas.

// recebe o valor do saque
let saque: number = Number(prompt("Quanto você está sacando?"));

// calcula a quantidade de notas
const notas100: number = Math.floor(saque / 100);
saque = saque % 100;
const notas50: number = Math.floor(saque / 50);
saque = saque % 50;
const n20: number = Math.floor(saque / 20);
saque = saque % 20;
const n10: number = Math.floor(saque / 10);

// retorna a quantidade de notas
alert(
  `${notas100} nota(s) de 100, ${notas50} nota(s) de 50, ${n20} nota(s) de 20 e ${n10} nota(s) de 10`,
);
