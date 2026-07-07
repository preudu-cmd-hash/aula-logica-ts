// Percorra a lista de votos e conte quantas vezes o "sim" apareceu.

const votos: string[] = ["sim", "não", "não", "sim", "não", "sim", "sim"];
let votosSim = 0;

votos.forEach((n) => (n === "sim" ? votosSim++ : (votosSim = votosSim)));

alert(`A quantidade de votos a favor é: ${votosSim}`);
