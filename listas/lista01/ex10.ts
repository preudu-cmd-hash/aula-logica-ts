// Leia a distância (km) e os litros gastos, e mostre o consumo médio (km/l) com 1 casa. 400 km / 32 L → 12.5 km/l.

// recebe os valores do usuário
const distancia: number = Number(prompt("Qual foi a distância percorrida?"));
const litros: number = Number(
  prompt("Qual foi a quantidade de litros consumida?")
);

// calcula os km/l
const kmL: number = distancia / litros;

// retorna o valor formatado
alert(`Km/L: ${kmL.toFixed(1)}L`);
