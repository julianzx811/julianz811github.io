function generate_board(size){
    const father = document.querySelector('#container');

    for(let i = 1; i <=size;i++){
        const element = document.createElement('div');
        element.setAttribute('id',`grid-item${i}`);
        element.classList.add('grid-item');
        element.textContent= i;
        father.append(element);
    }
}
generate_board(256);

//pencial draw functions
const divs = document.querySelectorAll('div');

let mouseENCIMA = (e) =>{
    const divcito = document.querySelector('#'+e.target.id);
    divcito.classList.add('grid-item-blue');
};

divs.forEach(div => {
    div.addEventListener('mouseover',mouseENCIMA);
});


function clear_the_board(){
    
}