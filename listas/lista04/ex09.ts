// Mesma ideia do maior, mas trocando quando achar um menor. Cuidado: não comece o menor em 0!

const arrayMenor: number[] = [6, 2, 9, 7, 5];
let menorArray = arrayMenor[0];

for (const i of arrayMenor) {
  if (i < menorArray) {
    menorArray = i;
  }
}

alert(`O menor número dentre ${arrayMenor.join(", ")} é ${menorArray}`);
