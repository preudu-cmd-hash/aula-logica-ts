// Leia um número e mostre a tabuada dele, de 1 a 10 — uma linha por multiplicação.

const tabuada: number = Number(
  prompt(
    "Digite um número para receber sua tabuada (abra o console para vê-la)"
  )
);

for (let i = 1; i <= 10; i++) {
  console.log(tabuada * i);
}
