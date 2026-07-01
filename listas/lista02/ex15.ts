// Vai pra fila preferencial quem tem mais de 65, ou é deficiente, ou é gestante. Faça as 3 perguntas.

const idade4: number = Number(prompt("Digite uma idade"));
const pcd: number = Number(
  prompt("Possui defieciêcia? (1 para sim e 2 para não)"),
);
const gravida: number = Number(prompt("É gestante? (1 para sim e 2 para não)"));

if (idade4 >= 65 || pcd === 1 || gravida === 1) {
  alert("Fila preferencial");
} else {
  alert("Fila normal");
}
