// Percorra o array e conte quantos números são pares.

const arrayPares: number[] = [
  1, 2, 3, 4, 5, 6, 7, 0, 2, 4, 3, 1, 6, 4, 5, 1, 2, 5, 7, 8, 23, 443, 23, 12,
  51,
];
const numerosPares: number[] = [];
let paresArray = 0;

for (const i of arrayPares) {
  if (i % 2 === 0) {
    numerosPares.push(i);
    paresArray++;
  }
}

alert(
  `os núeros pares são ${numerosPares.join(
    ", "
  )}, e a quantidade total de números pares é de ${paresArray}`
);
