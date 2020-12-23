var billAmount = document.querySelector('#billAmount');
var cashGiven = document.querySelector('#cashGiven');
var button = document.querySelector('#submitButton');
var cashSection = document.querySelector('#cashSection');
var finalOutput = document.querySelector('#finalOutput');
// creating function for button handler

function buttonHandler(){
    var bill = billAmount.value;
    var cash = cashGiven.value;
    if(cash<bill){
        finalOutput.innerHTML='<h1>Sorry given cash is less than bill</h1>';
    }
    else if(cash === bill){
        finalOutput.innerHTML='<h1>Cash given is equal to bill</h1>';
    }
    else{
        var remaining = Number(cash)-Number(bill);
        var currency = [2000 ,500 ,100 ,20 ,10 ,5 ,1]
    }
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
