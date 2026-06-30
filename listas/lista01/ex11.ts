// Leia as 4 notas de um aluno e mostre a média final.

// Recebe as 4 notas
const nota1: number = Number(prompt("Digite a primeira nota"));
const nota2: number = Number(prompt("Digite a segunda nota"));
const nota3: number = Number(prompt("Digite a terceira nota"));
const nota4: number = Number(prompt("Digite a quarta nota"));

// calcula a média
const mediaNotas: number = (nota1 + nota2 + nota3 + nota4) / 4;

// retorna o valor
alert(`a média das quatro notas é: ${mediaNotas}`);
