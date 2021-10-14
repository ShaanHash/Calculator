//Define Functions
function add (arg1, arg2) {
    return Math.round((Number(arg1) + Number(arg2))*100 )/100;
};

function sub (arg1, arg2) {
    return Math.round((Number(arg1) - Number(arg2))*100)/100;
};

function mult (arg1, arg2) {
    return Math.round((Number(arg1) * Number(arg2))*100)/100;
};

function divi (arg1, arg2) {
    return Math.round((Number(arg1) / Number(arg2))*100)/100;
};

//Define object variables
let numbers = document.querySelectorAll("#number");
let screen = document.querySelector(".screen");
let addButton = document.querySelector("[data-key='+']");
let subButton = document.querySelector("[data-key='-']");
let divButton = document.querySelector("[data-key='/']");
let mulButton = document.querySelector("[data-key='*']");
let equals = document.querySelector("[data-key='=']");
let reset = document.querySelector("[data-key='reset']");
let clear = document.querySelector("[data-key='clear']");
let dec = document.querySelector("[data-key='.']");

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
  
        if (screen.innerText.length <= 12) {
            screen.innerText += element.dataset.key;
        }; 

        if (val1 != undefined) {
            val2 = screen.innerText;
        };
        
    });
});

//Defube vehaivour for decimal button
dec.addEventListener('click', () => {

    if (screen.innerText.includes(".")) {

    } else {
        screen.innerText += "."
    };
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

//Define behaivour for sub button
subButton.addEventListener('click', () => {

    if (val1 != undefined && screen.innerText != "") {
        screen.innerText = "";
        func = "-"
    }; 
    
    if (val1 == undefined) {
        val1 = screen.innerText;
        screen.innerText = "";
        func = "-"
    };

});

//Define behaivour for div button
divButton.addEventListener('click', () => {

    if (val1 != undefined && screen.innerText != "") {
        screen.innerText = "";
        func = "/"
    }; 
    
    if (val1 == undefined) {
        val1 = screen.innerText;
        screen.innerText = "";
        func = "/"
    };

});

//Define behaivour for mult button
mulButton.addEventListener('click', () => {

    if (val1 != undefined && screen.innerText != "") {
        screen.innerText = "";
        func = "*"
    }; 
    
    if (val1 == undefined) {
        val1 = screen.innerText;
        screen.innerText = "";
        func = "*"
    };

});

//Define behvaiour for equals button
equals.addEventListener('click', () => {


    if (screen.innerText.length >= 14) {
        screen.innerText = "TOO LONG";
        val1 = undefined;
        val2 = undefined;
        func = undefined;
    } else {

        switch(func) {
            case "+": 
                screen.innerText = add(val1,val2);
                val1 = add(val1, val2);
                break;  
            case "-":
                screen.innerText = sub(val1,val2);
                val1 = sub(val1, val2);
                break;
            case "/":
                screen.innerText = divi(val1,val2);
                val1 = divi(val1, val2);
                break;
            case "*":
                screen.innerText = mult(val1,val2);
                val1 = mult(val1, val2);
                break;    
        };
    };

});

//Define behaivour for reset button
reset.addEventListener('click', () => {

    val1 = undefined;
    val2 = undefined;
    screen.innerText = "";
    func = undefined;

});

//Define behaivour for clear button
clear.addEventListener('click', () => {
    if (val2 != undefined) {
        val2 = undefined;
        screen.innerText = "";
    } else if (func != undefined) {
        func = undefined;
        screen.innerText = "";
    } else {
        val1 = undefined;
        screen.innerText = "";
    };
});