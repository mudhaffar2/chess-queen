
module.exports = function matrixIncrement (data) {

  return data.map(function(rows) {
    return rows.map(function(cell) {
      return cell+1;
    });
  });
}
