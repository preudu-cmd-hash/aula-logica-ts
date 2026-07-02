// Um caixa: 1 deposita, 2 vê saldo, 3 sai. Repita o menu (while) até escolher Sair.

let menu = 0;
let saldo20 = 0;

while (menu !== 3) {
  menu = Number(prompt("1. depositar\n2. Ver saldo\n3. Sair"));
  switch (menu) {
    case 1:
      let deposito = prompt("quanto deseja depositar?");
      saldo20 = saldo20 + Number(deposito);
      break;
    case 2:
      alert(saldo20);
      break;
    case 3:
      alert(
        "Até logo, saiba, o seu saldo não ficou salvo em lugar algum e será zerado"
      );
      break;
    default:
      alert("Opção inválida");
      break;
  }
}
