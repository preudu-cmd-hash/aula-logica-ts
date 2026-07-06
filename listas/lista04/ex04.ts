// Percorra o array com for e some todos os números num acumulador.

const arraySoma: number[] = [1, 2, 3, 4, 5];
let acumuladorArray = 0;

arraySoma.forEach((n) => (acumuladorArray = acumuladorArray + n));

alert(`a soma dos números ${arraySoma.join(", ")} é: ${acumuladorArray}`);
