// Use forEach pra montar uma lista com um traço antes de cada nome.

const arrayLista: string[] = ["Ana", "Bruno", "Caio", "Jonas"];
let mensagemArray = "";

arrayLista.forEach((n) => (mensagemArray = mensagemArray + " - " + n));

alert(mensagemArray);
