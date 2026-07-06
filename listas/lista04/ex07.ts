// Some tudo e divida pelo .length. Mostre com 1 casa decimal.

const notasArray: number[] = [6, 6, 4, 7, 9];
let somaArray = 0;

for (const i of notasArray) {
  somaArray = somaArray + i;
}

const mediaArray: number = somaArray / notasArray.length;

alert(mediaArray.toFixed(1));
