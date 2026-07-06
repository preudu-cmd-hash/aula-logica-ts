// Use .map pra criar uma nova lista com cada número dobrado.

const arrayNormal: number[] = [6, 2, 9, 7, 5];
const arrayDobrado: number[] = [];

arrayNormal.map((normal) => arrayDobrado.push(normal * 2));

alert(
  `os números normais são: ${arrayNormal.join(
    ", "
  )}\nos números dobrados são: ${arrayDobrado.join(", ")}`
);
