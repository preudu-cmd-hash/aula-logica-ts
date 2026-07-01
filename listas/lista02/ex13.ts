// leia 3 números e diga qual é maior

const a: number = Number(prompt("Digite um número"));
const b: number = Number(prompt("Digite outro número"));
const c: number = Number(prompt("Digite mais um número"));

if (a >= b && a >= c) {
  alert(`${a} é o maior`);
} else if (b >= c) {
  alert(`${b} é o maior`);
} else {
  alert(`${c} é o maior`);
}
