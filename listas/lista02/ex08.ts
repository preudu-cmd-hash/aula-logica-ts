// Leia um número e diga se é par, ímpar ou zero. (Use else if.)

const numberNovo: number = Number(prompt("Digite um número"));

if (numberNovo === 0) {
  alert("Zero");
} else if (numberNovo % 2 === 0) {
  alert("Par");
} else {
  alert("Ímpar");
}
