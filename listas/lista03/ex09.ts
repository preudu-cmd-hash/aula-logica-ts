// Leia quantas notas, depois cada nota, e mostre a média com 1 casa decimal.

const quantasNotas: number = Number(prompt("Quantas notas irá colocar?"));
let acumulaNotas: number = 0;

for (let i = 1; i <= quantasNotas; i++) {
  let notaNova: number = Number(prompt("Qual a nota da vez?"));

  acumulaNotas = acumulaNotas + notaNova;

  if (i === quantasNotas) {
    const media: number = acumulaNotas / quantasNotas;
    console.log(media);
  }
}
