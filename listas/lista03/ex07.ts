// Leia N e mostre só os números pares de 1 até N.

let numeroPar: number = Number(
  prompt(
    "Digite um número para descobrir os pares até ele (resultado no console)"
  )
);

for (let i = 1; i <= numeroPar; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
