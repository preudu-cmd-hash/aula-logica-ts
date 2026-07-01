// Leia peso e altura, calcule o IMC (peso ÷ altura²) e classifique: abaixo (<18.5), normal (<25), sobrepeso (<30), obesidade (≥30).

const peso1 = Number(prompt("Digite seu peso em kg (55.5)"));
const altura1 = Number(prompt("Digite sua altura (1.55)"));

const imc1: number = peso1 / (altura1 * altura1);

if (imc1 < 18.5) {
  alert("abaixo do peso");
} else if (imc1 < 25) {
  alert("peso normal");
} else if (imc1 < 30) {
  alert("sobrepeso");
} else {
  alert("Obesidade");
}
