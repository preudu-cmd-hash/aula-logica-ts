// Leia um número e diga se ele é múltiplo de 3.

const multiplo: number = Number(prompt("Digite um número"));

if (multiplo % 3 === 0) {
  alert(`${multiplo} é multiplo de 3`);
} else {
  alert(`${multiplo} não é múltiplo de 3`);
}
