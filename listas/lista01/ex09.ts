// Leia a área de um terreno e o valor do m², e mostre o preço total. 200 m² × R$ 150 → R$ 30000.

// recebe a área do terreno em m²
const areaM: number = Number(prompt("Qual área do terreno em m²?"));

// calcula o valor do terreno
const valorTerreno: number = areaM * 150;

// retorna o valor do terreno
alert(`o valor total do terreno de área ${areaM} é: ${valorTerreno}`);
