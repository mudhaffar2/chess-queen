
/////////////////   Table creation function

function createChessTable(row,column) {

  var matrix = [];
  for(var i = 0; i < row; i++){
    var tr = document.createElement("div");
    tr.classList.add("chessboard__row");
    matrix[i] = [];
    for(var t = 0; t < column; t++){
      var td = document.createElement("div");
      td.classList.add("chessboard__cell");
      tr.appendChild(td);
      matrix[i].push(td);


      if((i - t) % 2 !== 0){
        td.classList.add("chessboard__cell--black");
      }
    }

    table.appendChild(tr);
  }
  return matrix;

}

////////////////  adding and removing class functions

function removeHighlight() {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (table.rows[i].cells[j].classList.contains('chessboard__cell--shadow')) {
      table.rows[i].cells[j].classList.remove('chessboard__cell--shadow');
      }
    }
  }
}

function highlightRow(rowNum) {
  for (var j = 0; j < cols; j++) {
    table.rows[rowNum].cells[j].classList.add('chessboard__cell--shadow');
  }
}

function highlightColumn(colNum) {
  for (var i = 0; i < rows; i++) {
    table.rows[i].cells[colNum].classList.add('chessboard__cell--shadow');
  }
}

function highlightDiagonals(rowNum, colNum) {
  if (rowNum != 0) {
    var variant = 1;
    var cl;
    var cr;
    for (var i = rowNum-1; i > -1; i--) {
      cl = colNum-variant;
      if (cl >= 0) {
        table.rows[i].cells[cl].classList.add('chessboard__cell--shadow');
      }
      cr = colNum+variant;
      if (cr <= 7) {
        table.rows[i].cells[cr].classList.add('chessboard__cell--shadow');
      }
      variant++;
    }
  }

  if (rowNum != 7) {
    var variant = 1;
    var cl;
    var cr;
    for (var i = rowNum+1; i < 8; i++) {
      cl = colNum-variant;
      if (cl >= 0) {
        table.rows[i].cells[cl].classList.add('chessboard__cell--shadow');
      }
      cr = colNum+variant;
      if (cr <= 7) {
        table.rows[i].cells[cr].classList.add('chessboard__cell--shadow');
      }
      variant++;
    }
  }
}

function cellClicked(rowNum,colNum) {
  removeHighlight();
  highlightRow(rowNum);
  highlightColumn(colNum);
  highlightDiagonals(rowNum,colNum);
}

///////////////////// creating click handler function

function addClickHandler() {
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < cols; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = 
      function(row) {
        return function(event) { 
          console.log(event);
          var cellRow = event.target.parentElement.rowIndex;
          var cellCol = event.target.cellIndex;
          cellClicked(cellRow,cellCol);
        };
      };
    currentRow.onclick = createClickHandler(currentRow);
  }
}

// function addClickHandler() {
//   var rows = table.getElementsByTagName("tr");
//   for (i = 0; i < cols; i++) {
//     var currentRow = table.rows[i];
//     var createClickHandler = 
//       function(row) {
//         return function(event) { 
//           var cellRow = event.srcElement.parentElement.rowIndex;
//           var cellCol = event.srcElement.cellIndex;
//           cellClicked(cellRow,cellCol);
//         };
//       };
//     currentRow.onclick = createClickHandler(currentRow);
//   }
// }

//////////////////////  code

var rows = 8;
var cols = 8;
var table = document.querySelector(".chessboard__table");
createChessTable(rows,cols);
window.onload = addClickHandler();











