// Lista 01 - Segundo exercício: Saudação
// O programa recebe um nome e um sobrenome, logo após retorna uma saudação (Olá Fulando da Silva Saulo)

// 1. O programa recebe nome e sobrenome
const nome: string = prompt("Digite seu primeiro nome.") ?? "";
const sobreNome: string = prompt("Digite seu sobrenome.") ?? "";

// 2. Saída: o programa retorna uma saudação a você, utilizando o nome e o sobrenome que foram recebidos
alert(`Olá, seja muito bem vindo, ${nome} ${sobreNome}`);
