// Use .map com .toUpperCase() pra deixar todos os nomes em maiúsculas.

const arrayMinusculo: string[] = ["Ana", "Bruno", "Caio", "Jonas"];
const arrayMaiusculo: string[] = [];

arrayMinusculo.map((minusculo) => arrayMaiusculo.push(minusculo.toUpperCase()));

alert(
  `nomes em minúsculo: ${arrayMinusculo.join(
    ", "
  )}\nnomes em maiúsculo: ${arrayMaiusculo.join(", ")}`
);
