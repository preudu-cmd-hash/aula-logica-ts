// Leia N e some todos os números de 1 até N. Use um acumulador.

let somador: number = 5;
let acumulador: number = 0;

for (let i = 1; i <= somador; i++) {
  acumulador = acumulador + i;
  if (i === somador) {
    console.log(`a soma de todos os números até ${somador} é ` + acumulador);
  }
}
