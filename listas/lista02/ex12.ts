// Menos de 16: não entra. De 16 a 17: só acompanhado. 18+: entra normal. Leia a idade.

const idadeNovo: number = Number(prompt("Digite uma idade"));

if (idadeNovo < 16) {
  alert("Não entra");
} else if (idadeNovo < 18) {
  alert("Entra acompanhado");
} else {
  alert("Entrada normal");
}
