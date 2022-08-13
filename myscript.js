const resetButton = document.getElementById('reset_button');
const gridContainer = document.querySelector('.grid_container');
resetButton.addEventListener('click', makeGrid);



function makeGrid(selectedWidth, selectedHeight ){

    const width = parseInt(getSelectedWidth());
    const height = parseInt(getSelectedHeight());
    const numeroCelle=width*height;

    gridContainer.innerHTML = "";

    for(let i = 0; i<numeroCelle; i++){
        const cella = getSquareElement();
        //cella.innerHTML = i + 1;
        gridContainer.append(cella);    
    }
}

function getSquareElement(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', clickHandler)

    return square;
}

function getSelectedWidth() {    
    let selectedWidth = document.getElementById("grid_width").value;
    console.log(selectedWidth);
    return selectedWidth;
}

function getSelectedHeight() {    
    let selectedHeight = document.getElementById("grid_height").value;
    console.log(selectedHeight);
    return selectedHeight;
}

function clickHandler(){
    const square = this;
    square.classList.toggle('clicked');
    square.removeEventListener('click', clickHandler);
    console.log("cella numero: " + parseInt(square.innerHTML))
}
