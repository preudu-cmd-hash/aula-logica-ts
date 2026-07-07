// Cada aluno é um objeto { nome, nota }. Use .filter pra pegar os aprovados (nota ≥ 6) e .map pros nomes.

interface Alunos {
  name: string;
  nota: number;
}

const alunos: Alunos[] = [
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
let mensagemAprovados = "";
const aprovados: Alunos[] = alunos.filter((aprovado) => aprovado.nota >= 6);

aprovados.map((aprovado) => {
  alert(`Aluno aprovado: ${aprovado.name}`);
});
alert(`O número total de alunos aprovados é: ${aprovados.length}`);
