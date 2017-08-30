
module.exports = function renderPlainText(data) {
  var rows = [];

  data.forEach(function(columns) {
    var rowString = columns.join('');
    rows.push(rowString);
  });

  return rows.join('\n');

  // // using .map()
  // var rows = matrix.map(function(columns) {
  //   // columns is an array ;)
  //   return columns.join('');
  // });
  // // rows is also an array
  // // (because it's what the .map() function returns)
  // // the "\n" is the code for a new line in a string
  // return rows.join('\n');
}
