var main = require("./main.js"),
  table = require("text-table");

var tableWidth = parseInt(process.argv[2] || "10", 10),
  primes = main.primeLazySeq().take(tableWidth),
  tableData = main.multiplicationTable(primes),
  tableArray = tableData
    .map(function(v, i) {
      return v.toStack().unshift(primes.get(i));
    })
    .toStack()
    .unshift(primes.toStack().unshift("X"));

console.log("Output for initial " + tableWidth + " prime numbers multiplied\n");

console.log(table(tableArray.toJS()));
