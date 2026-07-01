// Leia um número e diga se é positivo (≥ 0) ou negativo.

const positivoNegativo: number = Number(
  prompt("Digite um número positivo ou negativo, podendo ser 0"),
);

if (positivoNegativo < 0) {
  alert(`${positivoNegativo} é negativo`);
} else {
  alert(`${positivoNegativo} é positivo`);
}
