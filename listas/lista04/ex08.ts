// Comece supondo que o maior é o primeiro item. Percorra e troque sempre que achar um maior.

const arrayMaior: number[] = [6, 2, 9, 7, 5];
let maiorArray: number = arrayMaior[0];

for (const i of arrayMaior) {
  if (i > maiorArray) {
    maiorArray = i;
  }
}

alert(`O maior número dentre ${arrayMaior.join(", ")} é ${maiorArray}`);
