// Leia a nota (0 a 10) e diga se o aluno foi aprovado (≥ 6) ou reprovado.

const nota: number = Number(prompt("Digite uma nota de 0 à 10"));

if (nota < 6) {
  alert("Reprovado");
} else {
  alert("Aprovado");
}
