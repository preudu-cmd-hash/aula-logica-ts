// Login certo: admin, senha: 1234. Se algo estiver errado, diga qual (login ou senha).

const senha = 1234;

const tentativaLogin: string = String(prompt("Digite o usuário"));
const tentativaSenha: number = Number(prompt("Digite a senha"));

if (tentativaLogin === "admin" && tentativaSenha === senha) {
  alert("ok");
} else if (tentativaSenha !== senha) {
  alert("senha incorreta");
} else {
  alert("usuário incorreto");
}
