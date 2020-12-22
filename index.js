var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var button = document.querySelector("#submitButton");
var cashSection = document.querySelector('#cashSection')
// creating function for button handler

function buttonHandler(){
    var bill = billAmount.value;
    console.log(bill)
}
//function to show cash Given input are on when bill amount is not null

function inputHandler(){
    var bill = billAmount.value;
    if(bill===""){
        cashSection.hidden = true;
    }
    else{
        cashSection.hidden=false;
    }
}
billAmount.addEventListener('input',inputHandler);
button.addEventListener('click',buttonHandler);
