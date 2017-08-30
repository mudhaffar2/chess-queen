
module.exports = function matrixFillColNum(data) {
  // var returned = [];
  // for (var r = 0; r < data.length; r++) {
  //   var counter = 0;
  //   returned[r] = [];
  //   for (var c = 0; c < data[r].length; c++) {
  //     returned[r].push(c);
  //   }
  //   counter++;
  // }
  // return returned;

  return data.map(function(rows) {
    return rows.map(function(cell, columnNum) {
      return columnNum;
    });
  });
}
