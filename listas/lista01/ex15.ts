// Leia o total da conta e o nº de pessoas. Some 10% de gorjeta e mostre quanto cada um paga.

// recebe os valores
const totalConta: number = Number(prompt("Digite o valor total da conta"));
const totalPessoas: number = Number(prompt("Digite o total de pessoas"));

// calcula o quanto cada um pagou
const totalPorcentagem: number = totalConta + totalConta * 0.1;
const quantoPaga: number = totalPorcentagem / totalPessoas;

// retorna o valor
alert(`Cada pessoa deve pagar: ${quantoPaga.toFixed(2)}`);
