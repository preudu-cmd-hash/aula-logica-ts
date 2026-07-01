// É bissexto se for divisível por 4 e não por 100 — ou se for divisível por 400. Leia o ano.

const anoBissexto: number = Number(
  prompt("Digite um ano para descobrir se ele é ou não bissexto"),
);

if (
  (anoBissexto % 4 === 0 && anoBissexto % 100 !== 0) ||
  anoBissexto % 400 === 0
) {
  alert(`${anoBissexto} é um ano bissexto`);
} else {
  alert(`${anoBissexto} não é um ano bissexto`);
}
