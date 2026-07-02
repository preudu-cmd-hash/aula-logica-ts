// Leia N e conte de 1 até N com reticências. No fim, escreva "Fim!".

const N: number = Number(prompt("Digite um número para cronometrar"));

if (isNaN(N)) {
  alert("Entrada inválida, digite um número");
} else {
  for (let i = 1; i <= N; i++) {
    setTimeout(() => {
      console.log(`${i}...`);
      if (i === N) {
        console.log("FIM!");
      }
    }, i * 1000);
  }
}
