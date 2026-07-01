// Leia 2 números e a operação (+ - * /). Faça a conta — e bloqueie a divisão por zero.

const numero1 = Number(prompt("Digite um número"));
const numero2 = Number(prompt("Digite mais um número"));
const operador = prompt("Qual operação deseja realizar? (+, -, *, /)");

switch (operador) {
  case "+":
    let soma = numero1 + numero2;
    alert(soma);
    break;
  case "-":
    let subtracao = numero1 - numero2;
    alert(subtracao);
    break;
  case "*":
    let multiplicacao = numero1 * numero2;
    alert(multiplicacao);
    break;
  case "/":
    if (numero2 === 0) {
      alert("Impossível realizar uma divisão por 0");
      break;
    }
    let divisao = numero1 / numero2;
    alert(divisao);
    break;
  default:
    alert("Operador inválido");
    break;
}
