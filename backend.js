const father = document.querySelector('#container');

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
    divcito.classList.add('grid-item-blue');
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
    
}