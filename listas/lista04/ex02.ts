// Mostre quantos itens tem o array e o item do meio (use Math.floor pra achar o índice central).

const arrayItemMeio: string[] = ["Pedro", "Thais", "Joana", "Jorge", "Jonas"];

const itemMeio: string = arrayItemMeio[Math.floor(arrayItemMeio.length / 2)];

alert(
  `O array tem ${arrayItemMeio.length} nomes, e o nome que está no índice médio é: ${itemMeio}`
);
