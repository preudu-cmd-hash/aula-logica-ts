// Pergunte um nome e use .includes pra dizer se ele está entre os convidados.

const convidados: string[] = ["Ana", "Bruno", "Caio", "Jonas"];
const nomePergunta: string | null = prompt("Digite um nome");

if (nomePergunta === null || nomePergunta === "") {
  alert("Insira um nome, reinicie a página para fazê-lo");
} else if (convidados.includes(nomePergunta!)) {
  alert(`Seja bem-vindo(a) à festa ${nomePergunta}`);
} else {
  alert("Sinto muito, mas você não está na lista de convidados");
}
