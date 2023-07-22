// getting the items in varibles
const counterViwer = document.querySelector('.counter-number');
const buttonDecrease = document.querySelector('#btnDec');
const buttonReset = document.querySelector('#btnRes');
const buttonIncrease = document.querySelector('#btnInc');

let counter = 0;
// console.log(typeof counter, counter);

//buttons triggering the functions
buttonIncrease.addEventListener('click', plusOne);
buttonDecrease.addEventListener('click', negativeOne);
buttonReset.addEventListener('click', resetCounter);


//functions 
function plusOne(){
    counter =  parseInt(counterViwer.textContent);
    counter = counter + 1;
    counterViwer.textContent = counter;
}

function negativeOne(){
 counter =  parseInt(counterViwer.textContent);

    if (counter !== 0){
        counter = counter -1;
        counterViwer.textContent = counter;
    }
}

function resetCounter(){
    counter = 0;
    counterViwer.textContent = counter;
}