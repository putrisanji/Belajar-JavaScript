function balikKata(kata) {
  return kata.split("").reverse().join("");
  //split mengubah string menjadi array
  //dilakukan pengurutan decending menggunakan method reverse
  //join akan menggabungkan array dan menjadikanya string
}

// solusi lainnya

let reversed = "";

function BalikKata(params) {
  for (let word of params) {
    reversed = word + reversed;
  }
  console.log(reversed);
}

BalikKata("params");
