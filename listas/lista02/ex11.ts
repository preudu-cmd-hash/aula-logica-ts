// Leia a nota (0–10) e mostre o conceito: A (≥9), B (≥7), C (≥6), D (≥4), F (<4).

const conceito: number = Number(prompt("Digite uma nota de 0 a 10"));

if (conceito >= 9) {
  alert("A");
} else if (conceito >= 7) {
  alert("B");
} else if (conceito >= 6) {
  alert("C");
} else if (conceito >= 4) {
  alert("D");
} else {
  alert("F");
}
