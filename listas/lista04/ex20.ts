// Na mesma lista de objetos, descubra quem tem a maior nota — guardando o objeto inteiro, não só o número.

const alunosEx20: Alunos[] = [
  { name: "Julia", nota: 8.5 },
  { name: "Pedro", nota: 5.4 },
  { name: "Mariana", nota: 9.2 },
  { name: "Lucas", nota: 6.0 },
  { name: "Ana", nota: 7.3 },
  { name: "Rafael", nota: 4.8 },
  { name: "Camila", nota: 10 },
  { name: "Bruno", nota: 6.7 },
  { name: "Larissa", nota: 3.9 },
  { name: "Mateus", nota: 8.0 },
  { name: "Beatriz", nota: 5.9 },
];

let maiorNota: Alunos = alunosEx20[0];

alunosEx20.forEach((n) =>
  n.nota > maiorNota.nota ? (maiorNota = n) : (maiorNota = maiorNota),
);

alert(
  `O aluno com a maior nota é : ${maiorNota.name} e sua nota foi: ${maiorNota.nota.toFixed(1)}`,
);
