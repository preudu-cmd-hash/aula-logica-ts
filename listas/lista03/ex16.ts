// O número secreto é 7. Peça palpites (while) até acertar, contando as tentativas.

let tentativas: number = 0;
let advinha: number = Number(prompt("tente advinhar o número de 1 a 10"));

if (isNaN(advinha)) {
  alert("Digite um número, tente novamente recarregando a página");
}

while (advinha !== 7) {
  advinha = Number(prompt("Errou, tente novamente"));
  if (isNaN(advinha)) {
    alert("Digite um número, tente novamente recarregando a página");
    break;
  }
  tentativas++;
}

alert(
  `Parabéns, você realmente advinhou o número 7, você fez isso em ${tentativas} tentativas`
);
