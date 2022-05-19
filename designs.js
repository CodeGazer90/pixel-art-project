// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let form = document.getElementById("sizePicker");
let colorPicker = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');



function makeGrid(event) {
// Your code goes here!

//grab the values of the width and height entered and store them into variables
let gridHeight = document.getElementById('inputHeight').value;
let gridWidth = document.getElementById('inputWidth').value;

// this loop creates the table rows
for (let i = 0; i < gridHeight; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);

    //this loop appends the cells into each row and gives each cell a class name with its own number
    for(let j = 0; j < gridWidth; j++){
        let td = document.createElement('td');
        tr.appendChild(td);
        td.classList.add('cell'+[j])
    }
}

}
// this allows the submit button to create the grid without refreshing the page
form.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
    resetGrid();
    // form.style.display = "none";
});


// this target will allow the cell to change colors when it is clicked
table.addEventListener('click',function(event){
    let pickedColor = document.getElementById('colorPicker').value
    event.target.closest('td').style.backgroundColor = pickedColor;  
})

// this function will reset the grid 
function resetGrid(){
    table.innerHTML = '';
    makeGrid();
}

//creating a reset button Update : not accepted by the criteria. Was able to add my reset function to the submit event listener and it worked!!!!

// let reset = document.createElement("input");
// reset.type = 'submit';
// reset.value = "Submit",
// form.appendChild(reset);

// reset.addEventListener('click', function(event){
//     event.preventDefault();
//     resetGrid();
// });


        
    