var Immutable = require("immutable");

var integers = Immutable.Range(2, Infinity);

function primeLazySeq() {
  return integers.filter(function(v) {
    var sqrt = Math.sqrt(v),
      floor = Math.floor(sqrt),
      check = integers.takeWhile(function(v) {
        return v <= floor;
      });
    return !check.some(function(c) {
      return v % c == 0;
    });
  });
}

function multiplicationTable(integers) {
  var integers = integers || Immutable.List();
  return integers
    .map(function(x) {
      return integers
        .map(function(y) {
          return x * y;
        })
        .toList();
    })
    .toList();
}

module.exports = {
  primeLazySeq: primeLazySeq,
  multiplicationTable: multiplicationTable
};
