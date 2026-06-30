// Leia o preço e o valor pago. Mostre o troco, quantas notas de R$ 10 cabem nele e quanto sobra.

// recebe os valores
const preco: number = Number(prompt("Digite o preco total a pagar"));
const valorPago: number = Number(prompt("Digite o valor pago"));
const troco: number = valorPago - preco;

// faz os calculos necessários
const notas: number = Math.floor(troco / 10);
const sobra: number = troco % 10;

// retorna o pedido no enúnciado
alert(`Troco: R$ ${troco}\n${notas} nota(s) de 10 + R$ ${sobra}`);
