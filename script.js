
/////////////////   Table creation function

var table = document.querySelector("table");
function createChessTable(row,column) {
  var tableRows = '';
  var bgColor = '';
  var check = false;
  for (var i = 0; i < row; i++) {
    var tableCols = '';
    for (var j = 0; j < column; j++) {
      if (check) {
        bgColor = ' class="black"';
      } else {
        bgColor = ' class="white"';
      }
      check = !check;
      tableCols += `<td${bgColor}></td>`;
    }
    check = !check;
    tableRows += `<tr>${tableCols}</tr>`
  }
  table.innerHTML = `${tableRows}`;
}

////////////////  adding and removing class functions

function removeHighlight() {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (table.rows[i].cells[j].classList.contains('shadow')) {
      table.rows[i].cells[j].classList.remove('shadow');
      }
    }
  }
}

function highlightRow(rowNum) {
  for (var j = 0; j < cols; j++) {
    table.rows[rowNum].cells[j].classList.add('shadow');
  }
}

function highlightColumn(colNum) {
  for (var i = 0; i < rows; i++) {
    table.rows[i].cells[colNum].classList.add('shadow');
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
        table.rows[i].cells[cl].classList.add('shadow');
      }
      cr = colNum+variant;
      if (cr <= 7) {
        table.rows[i].cells[cr].classList.add('shadow');
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
        table.rows[i].cells[cl].classList.add('shadow');
      }
      cr = colNum+variant;
      if (cr <= 7) {
        table.rows[i].cells[cr].classList.add('shadow');
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
          var cellRow = event.srcElement.parentElement.rowIndex;
          var cellCol = event.srcElement.cellIndex;
          cellClicked(cellRow,cellCol);
        };
      };
    currentRow.onclick = createClickHandler(currentRow);
  }
}

//////////////////////  code

var rows = 8;
var cols = 8;
var table = document.querySelector("table");
createChessTable(rows,cols);
window.onload = addClickHandler();











