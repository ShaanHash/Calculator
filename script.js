
//Define Functions
function add (arg1, arg2) {
    return Number(arg1) + Number(arg2);
};

function sub (arg1, arg2) {
    return Number(arg1) - Number(arg2);
};

function mult (arg1, arg2) {
    return Number(arg1) * Number(arg2);
};

function divi (arg1, arg2) {
    return Number(arg1) / Number(arg2);
};


//Define object variables
let numbers = document.querySelectorAll(".button");
let screen = document.querySelector(".screen");

//Define primative variables
let val1 = undefined;
let val2 = undefined;



//Define the button event listeners
numbers.forEach((element) => {

    element.addEventListener('click', () => {
        

        if (screen.innerText.length <= 6) {
            screen.innerText += element.dataset.key;
        };
        



    });
});

