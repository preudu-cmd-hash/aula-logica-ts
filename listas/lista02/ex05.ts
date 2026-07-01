// Leia dois números e diga qual é o maior.

let numA: number = Number(prompt("Digite um número"));
let numB: number = Number(prompt("Digite outro número"));

if (numA > numB) {
  alert(`${numA} é maior`);
} else if (numB > numA) {
  alert(`${numB} é maior`);
} else {
  alert("eles são iguais");
}
