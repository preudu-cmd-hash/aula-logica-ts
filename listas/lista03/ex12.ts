// O fatorial de N (N!) é 1 × 2 × 3 × … × N. Leia N e calcule. Acumulador de multiplicação começa em 1!
// 5! = 1×2×3×4×5 = 120.
// for * fat = 1

const fatoriando: number = Number(
  prompt("Digite um número para adiquirir seu fatorial"),
);
let aglomerando: number = 1;

if (isNaN(fatoriando)) {
  alert("caractere inválido, digite um número");
} else {
  for (let i = 1; i <= fatoriando; i++) {
    aglomerando = aglomerando * i;
    console.log(`calculando fatorial: ${aglomerando}`);
  }
}
