// Receba um valor em reais e converta para dólar (US$ 1 = R$ 4,95).

// pergunta se o usuário quer converter dólar pra real ou real pra dólar
const question: number = Number(
  prompt("Deseja converter de dólar para real (1); ou de real pra dólar (2)?")
);

switch (question) {
  case 1:
    //recebe o valor do usuário
    const dolares: number = Number(
      prompt("Qual valor deseja converter? (U$ 4.95 = R$ 1.00")
    );

    // converte dólar para real
    const conversorDolar: number = dolares * 4.95;

    //retorna o valor ao usuário
    alert(`O valor convertido é: ${conversorDolar}`);
    break;
  case 2:
    // recebe o valor do usuário
    const reais: number = Number(
      prompt("Qual valor deseja converter? (R$ 1.00 = U$ 4.95")
    );

    // converte real pra dólar
    const conversorReais: number = reais / 4.95;

    // retorna o valor convertido ao usuário
    alert(`O valor convertido é: ${conversorReais}`);
    break;
  default:
    alert("Opção inválida, recarregue a página para refazer");
    break;
}
