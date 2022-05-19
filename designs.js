// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let form = document.getElementById("sizePicker");
let colorPicker = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');



function makeGrid(event) {
// Your code goes here!

let gridHeight = document.getElementById('inputHeight').value;
let gridWidth = document.getElementById('inputWidth').value;

for (let i = 0; i < gridHeight; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    for(let j = 0; j < gridWidth; j++){
        let td = document.createElement('td');
        tr.appendChild(td);
        td.classList.add('cell'+[j])
    }
}

}

form.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});



table.addEventListener('click',function(event){
    let pickedColor = document.getElementById('colorPicker').value
    event.target.closest('td').style.backgroundColor = pickedColor;  
})


function resetGrid(){
    table.innerHTML = '';
    makeGrid();
}

let reset = document.createElement("input");
reset.type = 'submit';
reset.value = "RESET",
form.appendChild(reset);

reset.addEventListener('click', function(event){
    event.preventDefault();
    resetGrid();
});


        
    