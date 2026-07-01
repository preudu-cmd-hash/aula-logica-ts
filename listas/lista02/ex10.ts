let numAb: number = Number(prompt("Digite um número"));
let numBc: number = Number(prompt("Digite outro número"));

if (numAb > numBc) {
  alert(`${numAb} é maior`);
} else if (numBc > numAb) {
  alert(`${numBc} é maior`);
} else {
  alert("eles são iguais");
}
