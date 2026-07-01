// A loja dá 10% de desconto em compras acima de R$ 100. Leia o valor e mostre quanto pagar.

const valortotal: number = Number(prompt("Digite o valor da compra"));

if (valortotal > 100) {
  alert(`O valor a ser pago é de ${valortotal - valortotal * 0.1}`);
} else {
  alert(`O valor a ser pago é de ${valortotal}`);
}
