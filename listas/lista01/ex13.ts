// Leia o salário e a porcentagem de aumento, e mostre o novo salário.

// recebe os valores
const salario: number = Number(prompt("Qual o salário"));
const aumento: number = Number(
  prompt("Digite a porcentagem do aumento salarial")
);

// calcula o aumento
const porcentagem: number = aumento / 100;
const calculoSalario: number = salario * porcentagem;
const novoSalario: number = salario + calculoSalario;

// retorna o novo salário
alert(`o novo salário é: ${novoSalario}`);
