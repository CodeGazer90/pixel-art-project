// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let grid = document.getElementById("sizePicker");
let gridHeight = document.getElementById('inputHeight.value');
let gridWidth = document.getElementById('inputWidth.value');
let colorPicker = document.getElementById('colorPicker');
let pickedColor = document.getElementById('colorPicker.value')
let table = document.getElementById('pixelCanvas');
let submit = document.getElementById('submitBtn');
let tr = document.createElement('tr');
let td = document.createElement('td');




function makeGrid() {
// Your code goes here!
for (let i = 0; i <= gridHeight; i++){
    table.appendChild("tr");
    for(let j = 0; i <= gridWidth; i++){
        table.appendChild('td');
    }
}


}
