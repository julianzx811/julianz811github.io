const father = document.querySelector('#container');

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function generate_board(size){
    for(let i = 1; i <=size;i++){
        const element = document.createElement('div');
        element.setAttribute('id',`grid-item${i}`);
        element.classList.add('grid-item');
        element.textContent= i;
        father.appendChild(element);
    }
}
generate_board(256);

//pencial draw functions
const divs = document.querySelectorAll('div');

let mouseENCIMA = (e) =>{
    if(!(e.target.id == "container")){
    const divcito = document.querySelector('#'+e.target.id);
        divcito.style['background-color'] = random_rgba();
    }
};

divs.forEach(div => {
    div.addEventListener('mouseover',mouseENCIMA);
});

function clear_the_board(){
    const divs2 = document.querySelectorAll('.grid-item');
    divs2.forEach(div=>{
        father.removeChild(div);
        // father.removeChild(div);
    });
    length_board = window.prompt('lenght of the new board please');
    width_board = window.prompt('lenght of the new board please');
    generate_board(parseInt(length_board)*parseInt(width_board));
    father.style['grid-template-columns'] = 'repeat('+length_board+', 1fr)';
    father.style['grid-template-columns'] = 'repeat('+width_board+', 1fr)';
}