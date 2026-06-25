// Leia duas notas e mostre a média entre elas.

// recebe as duas notas do usuário
const notaUm: number = Number(prompt("qual a primeira nota?"));
const notaDois: number = Number(prompt("qual a segunda nota?"));

// calcula a média
const media: number = (notaUm + notaDois) / 2;

// retorna o valora ao usuário
alert(`a média das duas notas é ${media}`);
