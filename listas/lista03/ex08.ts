// Pergunte quantos números serão digitados. Depois leia cada um e mostre a soma total.

const quantosNumeros: number = Number(
  prompt("Quantos números irá querer somar?")
);
let acumuladorSoma: number = 0;

for (let i = 1; i <= quantosNumeros; i++) {
  let numeroNovo: number = Number(prompt("QUal o número da vez?"));

  acumuladorSoma = acumuladorSoma + numeroNovo;

  if (i === quantosNumeros) {
    console.log(acumuladorSoma);
  }
}
