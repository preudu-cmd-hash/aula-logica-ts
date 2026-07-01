// Leia um número e diga se é positivo, negativo ou zero.

const positivoNegativoNovo: number = Number(
  prompt("Digite um número positivo ou negativo, podendo ser 0"),
);

if (positivoNegativoNovo === 0) {
  alert(`${positivoNegativoNovo} é Zero`);
} else if (positivoNegativoNovo < 0) {
  alert(`${positivoNegativoNovo} é negativo`);
} else {
  alert(`${positivoNegativoNovo} é positivo`);
}
