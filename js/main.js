// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input
var inputHeight = document.getElementById('inputHeight');
var inputWidth =  document.getElementById('inputWidth');

var pixelCanvas = document.getElementById('pixelCanvas');
var sizePicker  = document.getElementById('sizePicker');

// function make grid when size is submitted by the user
function makeGrid() {
  
  var fragment = document.createDocumentFragment();
  for(var row =0; row < inputHeight.value; row++){
      var rows = document.createElement('tr');
      
      for(var col =0; col<inputWidth.value; col++) {
        var cols = document.createElement('td');
          rows.addEventListener('click',addColor);
          rows.appendChild(cols); 
      }
    fragment.appendChild(rows);
    pixelCanvas.appendChild(fragment);  
  }     
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(evt) {
  evt.preventDefault();
  while(pixelCanvas.hasChildNodes()) {
        pixelCanvas.removeChild(pixelCanvas.lastChild);
  }
  makeGrid();     
});

// add selected color to the cell
function addColor(event) {
  event.target.style.background = colorPicker.value;
}




