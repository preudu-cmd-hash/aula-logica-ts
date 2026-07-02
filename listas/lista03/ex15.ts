// Só aceite segundos de 1 a 59. Se digitarem fora, peça de novo (while) até valer. Depois conte.

let quantosSegundos: number = Number(
  prompt("Quantos segundos quer contar? (1 a 59)"),
);

while (isNaN(quantosSegundos) || quantosSegundos < 1 || quantosSegundos > 59) {
  quantosSegundos = Number(prompt("Quantos segundos quer contar? (1 à 59)"));
}

for (let i = 1; i <= quantosSegundos; i++) {
  setTimeout(() => {
    console.log(`${i}...`);
    if (i === quantosSegundos) {
      console.log("FIM!");
    }
  }, i * 1000);
}
