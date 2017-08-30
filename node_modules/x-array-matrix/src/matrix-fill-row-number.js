
module.exports = function matrixFillRowNum(data) {
  var returned = [];

  for (var r = 0; r < data.length; r++) {
    returned[r] = [];

    for (var c = 0; c < data[r].length; c++) {
      returned[r].push(r);
    }
  }

  return returned;

  // return data.map(function(columns, rowNum) {
  //   return columns.map(function(cell) {
  //     return rowNum;
  //   });
  // });
}
