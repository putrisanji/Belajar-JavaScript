function deretAngka(n) {
  let angka = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      angka += "NIO" + " ";
    } else if (i % 5 === 0) {
      angka += "MIC" + " ";
    } else {
      angka += i + " ";
    }
  }
  return angka;
}

console.log(deretAngka(30));
