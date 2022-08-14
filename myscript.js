const resetButton = document.getElementById('reset_button');
const gridContainer = document.getElementById('grid_container');
resetButton.addEventListener('click', makeGrid);
let color;
let selectedColor = document.getElementsByClassName('dot');
for (var i = 0 ; i < selectedColor.length; i++) {
    selectedColor[i].addEventListener('click' , getSelectedColor , false ) ; 
 }
//const colorSelectorWrapper = document.querySelector('.color_selector_wrapper');

/*crea la griglia*/
function makeGrid(){

    const width = parseInt(getSelectedWidth());
    const height = parseInt(getSelectedHeight());
    const numeroCelle=width*height;

    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    for(let i = 0; i<numeroCelle; i++){
        const cella = getSquareElement();
        //cella.innerHTML = i + 1;
        gridContainer.append(cella);    
    }
}

function getSquareElement(){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mousedown', clickHandler)

    return square;
}

function getSelectedWidth() {    
    let selectedWidth = document.getElementById("grid_width").value;
    console.log(selectedWidth);
    return selectedWidth;
}

function changeColor(element){
    draw_color = element.style.background;
}


function getSelectedHeight() {    
    let selectedHeight = document.getElementById("grid_height").value;
    console.log(selectedHeight);
    return selectedHeight;
}

function clickHandler(){
    const square = this;
    //square.removeEventListener('click', clickHandler);
    //console.log("cella numero: " + parseInt(square.innerHTML))
    if(color!=crossed){
        square.removeAttribute("class");
        square.setAttribute("class", "square");
        square.classList.add(color);
    }else{
        square.removeAttribute("class");
        square.setAttribute("class", "square");
    }
}


function getSelectedColor(){
    color = this.id
    console.log(color);
    return color;
}

