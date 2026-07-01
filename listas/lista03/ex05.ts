let multiplo5: number = Number(
  prompt(
    "Digite qualquer número para descobrir os múltiplos de 5 até ele (abra o console do navegador para ver o resultado)"
  )
);

for (let i = 1; i <= multiplo5; i++) {
  if (i % 5 === 0) console.log(i);
}
