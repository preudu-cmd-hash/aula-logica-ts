// Leia um número inteiro e mostre o antecessor e o sucessor dele.

// recebe o número do usuário
const numero: number = Number(
  prompt("Digite um número para saber o seu sucessor e seu antecessor")
);

// "calcula" o antecessor e o sucessor
const antecessor: number = numero - 1;
const sucessor = numero + 1;

// retorna o sucessor e o antecessor ao usuário
alert(
  `O antecessor do número ${numero} é ${antecessor}; e seu sucessor é ${sucessor}`
);
