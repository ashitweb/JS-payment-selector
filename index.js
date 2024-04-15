///                                                  Subscribe Function


const myCheckBox = document.getElementById("myCheckBox");
const UPI = document.getElementById("UPI");
const cards = document.getElementById("cards");
const paypal = document.getElementById("paypal");
const subResults = document.getElementById("subResults");
const paymentResult = document.getElementById("paymentResult");
const paymentButton = document.getElementById("paymentButton");

// paymentButton.onclick = function(){
//     subResult.textContent = `You are subscribed`;
   
//     }


function paymentButtons (){

    if(myCheckBox.checked){
    subResults.textContent = `You are subscribed`;
}

else{
    subResults.textContent = `You are not subscribed`;
}

if(cards.checked){
    paymentResult.textContent="You are paying by Debit/Credit Card";
}


if(paypal.checked){
    paymentResult.textContent="You are paying by Paypal";
}


if(UPI.checked){
    paymentResult.textContent="You are paying by UPI id";
}

}