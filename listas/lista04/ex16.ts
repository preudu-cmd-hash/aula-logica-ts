// Sem usar .reverse: percorra de trás pra frente e vá dando .push num array novo.

const reverso: string[] = ["Ana", "Bruno", "Caio", "Jonas"];
const naoReverso: string[] = [];

for (let i = reverso.length - 1; i >= 0; i--) {
  naoReverso.push(reverso[i]);
}

alert(
  `A lista de nomes normal é essa: ${reverso.join(", ")}\nA lista com os nomes em ordem inversa é essa: ${naoReverso.join(", ")}`,
);
