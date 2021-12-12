function panggilNestedArray(value) {
  for (var i = 0; i < value.length; i++) {
    console.log("id :", value[i][0]);
    console.log("name :", value[i][1]);
    console.log("company :", value[i][2]);
    console.log("\n");
  }
}

var nestedArray = [
  [1, "Mark Zuckerberg", "Facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"],
];

panggilNestedArray(nestedArray);

function nestedArray(value) {
  let arr = [];
  for (var i = 0; i < 4; i++) {
    let arr2 = [];
    for (var j = 0; j < value.length; j++) {
      arr2.push(value[j][i]);
    }
    arr.push(arr2);
  }

  console.log(arr);
}

var Arr = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

nestedArray(Arr);
