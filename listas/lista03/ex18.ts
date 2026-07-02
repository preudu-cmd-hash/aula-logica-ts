// Cada termo é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8… Leia N e mostre os N primeiros termos.

let quantidade: number = Number(
  prompt("quantos números da escala fibonacci quer saber?")
);
let ab = 0;
let bc = 1;
let msg = "";

for (let i = 1; i <= quantidade; i++) {
  msg = msg + ab + " ";
  let prox = ab + bc;
  ab = bc;
  bc = prox;
}

alert(msg);
