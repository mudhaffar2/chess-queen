
module.exports = function matrixFillSequence(data) {
  var counter = 0;
  var returned = [];

  for (var r = 0; r < data.length; r++) {
    returned[r] = [];

    for (var c = 0; c < data[r].length; c++) {
      returned[r].push(counter);

      counter++;
    }
  }

  return returned;

  // var counter = -1; // start at -1 so that we can increment the counter
  // return data.map(function(columns) {
  //   return columns.map(function(cell) {
  //     counter++;
  //     return counter;
  //   });
  // });
}
