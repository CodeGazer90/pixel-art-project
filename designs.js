// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let form = document.getElementById("sizePicker");
let colorPicker = document.getElementById('colorPicker');
let pickedColor = document.getElementById('colorPicker.value')
let table = document.getElementById('pixelCanvas');


function makeGrid(event) {
// Your code goes here!
console.log("function is working");
let gridHeight = document.getElementById('inputHeight').value;
let gridWidth = document.getElementById('inputWidth').value;

for (let i = 0; i <= gridHeight; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    for(let j = 0; j <= gridWidth; j++){
        let td = document.createElement('td');
        tr.appendChild(td);
    }
}

}

form.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});

