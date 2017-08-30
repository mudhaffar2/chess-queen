
/////////////////   Table creation function

function createChessTable(row,column) {

  for(var i = 0; i < row; i++){
    var tr = document.createElement("div");
    tr.classList.add("chessboard__row");

    for(var t = 0; t < column; t++){
      var td = document.createElement("div");
      td.classList.add("chessboard__cell");
      var circle = document.createElement("div");
      circle.classList.add("chessboard__cell__circle");
      circle.classList.add("chessboard__cell__circle--hide");
      td.appendChild(circle);
      tr.appendChild(td);

      if((i - t) % 2 !== 0){
        td.classList.add("chessboard__cell--black");
        circle.classList.add("chessboard__cell__circle--white");
      } else {
        circle.classList.add("chessboard__cell__circle--black");
      }
    }

    table.appendChild(tr);
  }
  return;

}

////////////////  adding and removing class functions

function removeHighlight(rowNum, colNum) {
  var highlightedElements = document.querySelectorAll('.chessboard__cell__circle');
  highlightedElements.forEach(function(item) {
    item.classList.add('chessboard__cell__circle--hide');
  });
  // table.children[rowNum].children[colNum].classList.remove('shadow');
}

function highlightRow(rowNum) {
  for (var j = 0; j < cols; j++) {
    table.children[rowNum].children[j].children[0].classList.remove('chessboard__cell__circle--hide');
  }
}

function highlightColumn(colNum) {
  for (var i = 0; i < rows; i++) {
    table.children[i].children[colNum].children[0].classList.remove('chessboard__cell__circle--hide');
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
        table.children[i].children[cl].children[0].classList.remove('chessboard__cell__circle--hide');
      }
      cr = colNum+variant;
      if (cr <= 7) {
        table.children[i].children[cr].children[0].classList.remove('chessboard__cell__circle--hide');
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
        table.children[i].children[cl].children[0].classList.remove('chessboard__cell__circle--hide');
      }
      cr = colNum+variant;
      if (cr <= 7) {
        table.children[i].children[cr].children[0].classList.remove('chessboard__cell__circle--hide');
      }
      variant++;
    }
  }
}

function cellClicked(rowNum,colNum) {
  removeHighlight(rowNum, colNum);
  highlightRow(rowNum);
  highlightColumn(colNum);
  highlightDiagonals(rowNum,colNum);
}

///////////////////// creating click handler function

function addClickHandler() {
  var rowsArray = table.querySelectorAll(".chessboard__row");
  rowsArray.forEach(function(item,rowIndex) {
    var cellsArray = item.childNodes;
      cellsArray.forEach(function(cells,cellIndex) {
        cells.addEventListener('click', function(event) {
          cellClicked(rowIndex, cellIndex);
        });
      });
      
      
      
    
      
  });
}

//////////////////////  code

var rows = 8;
var cols = 8;
var table = document.querySelector(".chessboard__table");
createChessTable(rows,cols);
window.onload = addClickHandler();


