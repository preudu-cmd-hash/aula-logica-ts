// Leia N e conte de N até 1 (de trás pra frente). No fim, solte um 🚀.

let dez: number = 10;

for (let i = dez; i > 0; i--) {
  console.log(i);
  if (i === 1) {
    console.log("🚀");
  }
}
