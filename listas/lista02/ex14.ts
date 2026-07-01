// Leia a idade e classifique: criança (0–11), adolescente (12–17), adulto (18–59), idoso (60+).

const novaIdade: number = Number(prompt("Digite uma idade"));

if (novaIdade < 12) {
  alert("Criança");
} else if (novaIdade < 18) {
  alert("Adolescente");
} else if (novaIdade < 60) {
  alert("Adulto");
} else {
  alert("Idoso");
}
