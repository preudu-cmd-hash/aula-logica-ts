// Leia quantos números e cada um. No fim, diga quantos foram pares e quantos ímpares. Dois contadores!

const quantidadeNumeros: number = Number(
  prompt("Quantos números quer digitar?"),
);
let pares: number = 0;
let impares: number = 0;

for (let i = 1; i <= quantidadeNumeros; i++) {
  const novoNumber: number = Number(
    prompt("Qual é o número que quer digitar?"),
  );

  if (novoNumber % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

alert(`você digitou ${pares} números pares e ${impares} números ímpares`);
