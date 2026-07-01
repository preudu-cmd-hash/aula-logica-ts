// Leia quantos números e depois cada um. No fim, diga qual foi o maior.

const quantoMaior: number = Number(
  prompt("Quantos números pra você descobrir o maior")
);
let maior: number = 0;

for (let i = 1; i <= quantoMaior; i++) {
  let novoMaior: number = Number(prompt("Digite um dos números"));
  maior = novoMaior > maior ? novoMaior : maior;
}

console.log("O maior número é " + maior);
