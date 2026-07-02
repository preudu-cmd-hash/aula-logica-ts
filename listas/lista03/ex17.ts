// Senha certa: 1234. Dê até 3 chances. Na 2ª falha, avise "última tentativa". Bloqueie após 3 erros.

let tentativasSenha: number = 1;

while (tentativasSenha < 4) {
  let password: number = Number(
    prompt("Digite a senha (4 dígitos, todos números)")
  );
  if (isNaN(password)) {
    alert("Valor inválido, tente novamnete recarregando a página");
    break;
  }

  if (password === 1234) {
    alert("Bem vindo!");
    break;
  } else {
    tentativasSenha++;
    alert("senha incorreta");
    if (tentativasSenha === 3) {
      alert("Essa é sua última tentativa");
    }
  }
}
