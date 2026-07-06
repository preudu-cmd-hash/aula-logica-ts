// Use .indexOf pra achar a posição de um nome na fila. Ele devolve -1 se não achar!

const ondeNaLista: string[] = ["Ana", "Bruno", "Caio", "Jonas"];

let nomeListado = prompt("Digite um nome para saber a posição dele na lista");
if (nomeListado === null) {
  alert(
    "Digite um nome para prosseguir, reinicie a página para tentar novamente"
  );
}

ondeNaLista.indexOf(nomeListado!) === -1
  ? alert("O nome não está incluso na lista")
  : alert(`O nome está na posição ${ondeNaLista.indexOf(nomeListado!) + 1}`);
