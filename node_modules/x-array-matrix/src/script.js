


var createMatrix = require('./create-matrix');

var renderPlainText = require('./render-plain-text');

var renderTableHTMLString = require('./render-table-html-string');

var matrixFillSequence = require('./matrix-fill-sequence');

var matrixFillRowNum = require('./matrix-fill-row-number');

var matrixFillColNum = require('./matrix-fill-column-number');

var matrixIncrement = require('./matrix-increment');

var matrixFillText = require('./matrix-fill-text');





var newMatrix = createMatrix(4, 4);
document.querySelector('#step-2').textContent = renderPlainText(newMatrix);


newMatrix = createMatrix(4, 4);
document.querySelector('#step-3').innerHTML = renderTableHTMLString(newMatrix);


newMatrix = matrixFillSequence(createMatrix(4, 4));
document.getElementById('step-4').innerHTML = renderTableHTMLString(newMatrix);


newMatrix = matrixFillRowNum(createMatrix(5, 2));
document.querySelector('#step-5').textContent = renderPlainText(newMatrix);


newMatrix = matrixFillColNum(createMatrix(2, 5));
document.querySelector('#step-6').textContent = renderPlainText(newMatrix);


newMatrix = matrixFillSequence(createMatrix(3, 5));
newMatrix = matrixIncrement(newMatrix);
document.querySelector('#step-7').innerHTML = renderTableHTMLString(newMatrix);


var text = 'abcdefghijklmnopqrstuvwxyz';
newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text);
document.querySelector('#step-8').innerHTML = renderTableHTMLString(newMatrix);


function renderTableDom (bonus, data) {

  data.forEach(function(rows) {
    var tr = document.createElement('tr');

    rows.forEach(function(cell) {
     var td = document.createElement('td');
     td.textContent = cell;
     tr.appendChild(td);
    });

    bonus.appendChild(tr);
  });
}

newMatrix = createMatrix(3, 5);
newMatrix = matrixFillText(newMatrix, text); // text is defined above ;)
renderTableDom(document.querySelector('#bonus'), newMatrix);


