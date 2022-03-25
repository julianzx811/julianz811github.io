//initializing the board
const father = document.querySelector('#container');
father.style['grid-template-columns'] = 'repeat(16, 1fr)';
father.style['grid-template-columns'] = 'repeat(16, 1fr)';

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function generate_board(size){
    for(let i = 1; i <=size;i++){
        const element = document.createElement('div');
        element.setAttribute('id',`grid-item${i}`);
        element.style['background-color'] = 'white';
        element.classList.add('grid-item');
        // element.textContent= '.';
        father.appendChild(element);
    }
}
generate_board(256);

//pencial draw functions
let current_pencil = 'rainbow';
const divs = document.querySelectorAll('div');

let mouseENCIMA = (e) =>{
    const divcito = document.querySelector('#'+e.target.id);
    if(!(e.target.id === "container") && current_pencil === 'rainbow'){
        console.log(e);
        divcito.style['background-color'] = random_rgba();
    }
    else if(!(e.target.id === "container") && current_pencil === 'NIGGA'){
        divcito.style['background-color'] = 'black';
    }
};
let rainbowmodeNIGGA = () =>{current_pencil = 'rainbow'};
let NIGGAmodeNIGGA = () =>{current_pencil = 'NIGGA'};

divs.forEach(div => {
    div.addEventListener('mouseover',mouseENCIMA);
});

function clear_the_board(){
    //removing all nodes
    const divs2 = document.querySelectorAll('.grid-item');
    divs2.forEach(div=>{
        father.removeChild(div);
        // father.removeChild(div);
    });
    //asking for sizes of the new board
    length_board = window.prompt('lenght of the new board please');
    width_board = window.prompt('lenght of the new board please');
    //generating the new board
    generate_board(parseInt(length_board)*parseInt(width_board));
    father.style['grid-template-columns'] = 'repeat('+length_board+', 1fr)';
    father.style['grid-template-columns'] = 'repeat('+width_board+', 1fr)';
}