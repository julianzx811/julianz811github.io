// const container = document.getElementById("container");

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     cell.style.borderColor = 'red';
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(16, 16);

const father = document.querySelector('#container');

for(let i = 0; i <(16*16);i++){
    const element = document.createElement('div');
    element.classList.add('grid-item');
    element.textContent= i;
    father.append(element);
}