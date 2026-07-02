// Primo só divide por 1 e por ele mesmo. Leia N e liste os primos de 2 até N. Vai precisar de laço dentro de laço.

let primo = Number(prompt("primos até:"));
let mensagem = "";

for (let i = 2; i <= primo; i++) {
  let ehPrimo: boolean = true;

  for (let u = 2; u < i; u++) {
    if (i % u === 0) ehPrimo = false;
  }

  if (ehPrimo) mensagem = mensagem + i + " ";
}

alert(`Primos: ${mensagem}`);
