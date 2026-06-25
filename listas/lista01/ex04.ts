// Leia um número e mostre o dobro, o triplo e a metade dele.

// recebe o número do usuário
const descobre: number = Number(
  prompt("Digite um número para descobrir seu dobro, triplo e sua metade")
);

// calcula o que precisa ser calculado
const dobro: number = descobre * 2;
const triplo: number = descobre * 3;
const metade: number = descobre / 2;

// retorna o resultado
alert(`dobro: ${dobro}; triplo: ${triplo}; metade: ${metade}`);
