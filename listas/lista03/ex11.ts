// Leia A e B e mostre os números pares de A até B. O laço não precisa começar em 1!

const numeroA: number = Number(prompt("Digite um número qualquer"));
const numeroB: number = Number(
  prompt(
    "Digite outro número qualquer, esse número precisa ser maior que o número anterior",
  ),
);

if (numeroA > numeroB) {
  alert("O segundo número precisa ser maior que o primeiro");
} else {
  for (let i = numeroA; i <= numeroB; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
