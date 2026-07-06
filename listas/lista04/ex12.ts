// Use .filter pra ficar só com os preços acima de 100.

const precosArray: number[] = [
  100, 400, 1230, 421, 45, 19, 50, 66, 666, 6666, 120, 99, 101, 56, 123, 69,
];

let caros = precosArray.filter((caro) => caro > 100);

alert(caros.join(", "));
