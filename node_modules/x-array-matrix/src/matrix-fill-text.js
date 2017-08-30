
module.exports = function matrixFillText (data,str) {
  var counter = -1;

  return data.map(function(rows) {
    return rows.map(function(cell) {
      counter++;
      return str.charAt(counter);
    });
  });
  // var returned = [];
  // var counter = 0;

  // for (var r = 0; r < data.length; r++) {
  //   var returned[r] = [];

  //   for (var c = 0; c < data[r].length; c++) {
  //     returned[r].push(str.charAt(counter));
  //     counter++;
  //   }
  // }

  // return returned;
}
