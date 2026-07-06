// Ordene do menor pro maior com .sort. Pegadinha: sem (a,b)=>a-b, o sort compara como texto e erra!

const sortidos: number[] = [
  100, 400, 1230, 421, 45, 19, 50, 66, 666, 6666, 120, 99, 101, 56, 123, 69,
];

let ordenados = sortidos.sort((a, b) => a - b);

alert(ordenados.join(", "));
