// Leia um total de segundos e mostre em horas, minutos e segundos.

// recebe oo valor
const segundosTotais: number = Number(prompt("Qual total de segundos?"));

// calcula as horas, minutos e segundos
const horas: number = Math.floor(segundosTotais / 3600);
const resto: number = segundosTotais % 3600;
const minutos: number = Math.floor(resto / 60);
const segundos: number = resto % 60;

// retorna os valores
alert(`${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`);
