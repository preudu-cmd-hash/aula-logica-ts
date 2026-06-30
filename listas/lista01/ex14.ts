// Leia um total de segundos e mostre quantos minutos e segundos são — com divisão inteira e resto.

const total: number = Number(prompt("Digite o total de segundos"));

const min: number = Math.floor(total / 60);
const seg: number = total % 60;

alert(`${min} minutos e ${seg} segundos`);
