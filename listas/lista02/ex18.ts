const ladoA = Number(prompt("Digite o tamnaho do primeiro lado do triângulo"));
const ladoB = Number(prompt("Digite o tamnaho do segundo lado do triângulo"));
const ladoC = Number(prompt("Digite o tamnaho do terceiro lado do triângulo"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (ladoA === ladoB && ladoB === ladoC) {
    alert("Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    alert("Isóceles");
  } else {
    alert("Escaleno");
  }
} else {
  alert("Não forma um triângulo");
}
