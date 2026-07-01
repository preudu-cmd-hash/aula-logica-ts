// Leia o salário bruto. Desconte INSS 11%, IR 7,5% e VT 6%, e mostre cada desconto e o líquido.

// recebe o salário bruto
const bruto: number = Number(prompt("Qual seu salário bruto? (2500.00)"));

// calcula os descontos
const inss: number = bruto * 0.11;
const ir: number = bruto * 0.075;
const vt: number = bruto * 0.06;
const liquido: number = bruto - inss - ir - vt;

//retorna os valores
alert(
  `Bruto: ${bruto.toFixed(2)}, INSS: ${inss.toFixed(2)}, IR: ${ir.toFixed(2)}, VT: ${vt.toFixed(2)}, Líquido: ${liquido.toFixed(2)}`,
);
