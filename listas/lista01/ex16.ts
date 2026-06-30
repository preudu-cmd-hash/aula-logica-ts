// Leia o peso (kg) e a altura (m) e calcule o IMC = peso ÷ altura², com 2 casas.

// recebe os valores
const peso: number = Number(prompt("Digite o seu peso em kg"));
const alturaMetro: number = Number(
  prompt("Digite sua altura em metros (1.75 por exemplo)")
);

// calcula o IMC
const imc: number = peso / (altura * altura);

// retorna o valor em duas casas decimais
alert(imc);
