
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
let numbers = document.querySelectorAll("#number");
let screen = document.querySelector(".screen");
let addButton = document.querySelector("[data-key='+']");
let equals = document.querySelector("[data-key='=']");

//debug
let debug = document.querySelector("body");
debug.addEventListener("click", () => {

    console.log(val1, val2, func);

});



//Define primative variables
let val1 = undefined;
let val2 = undefined;
let func = undefined;



//Define the button event listeners
numbers.forEach((element) => {

    element.addEventListener('click', () => {

        
        if (screen.innerText.length <= 6) {
            screen.innerText += element.dataset.key;
        }; 

        if (val1 != undefined) {
            val2 = screen.innerText;
        };
        
    });
});

//Define behaivour for add button
addButton.addEventListener('click', () => {

    if (val1 != undefined && screen.innerText != "") {
        screen.innerText = "";
        func = "+"
    }; 
    
    if (val1 == undefined) {
        val1 = screen.innerText;
        screen.innerText = "";
        func = "+"
    };

});



//define behvaiour for equals button
equals.addEventListener('click', () => {

    switch(func) {
        case "+": 
            val2 = screen.innerText;
            console.log(val1,val2);
            console.log(add(val1,val2));
            screen.innerText = add(val1,val2);
            val1 = add(val1, val2);
            val2 = undefined;
            func = undefined;
            break;  




    }


});

