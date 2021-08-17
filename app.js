
function updeteProductNumber( product , price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
   
    if(isIncreasing == true){
        productNumber = parseFloat(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber =parseFloat(productNumber) - 1;
    }
    productInput.value = productNumber;
    // updete total
   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
        // calculate Total
        calculatTotal();
}

function getInputValue(product){
    const productInput = document.getElementById( product +'-number');
    const productNumber = parseInt (productInput.value);
    return productNumber;
}




function calculatTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') *59;
    const subTotal = phoneTotal + caseTotal;
    const text = subTotal / 10;
    const totalPrice = subTotal + text;
    
    // updete on the html

    document.getElementById ('sub-total').innerText = subTotal;
    document.getElementById ('text-amount').innerText = text;
    document.getElementById ('total-price').innerText =  totalPrice;


  
}

// phone incrcase decrecase events
document.getElementById('phone-plus').addEventListener('click', function(){
        updeteProductNumber('phone',1219, true);   
});
document.getElementById('phone-mainus').addEventListener('click', function(){
        updeteProductNumber('phone',1219, false);   
});


// handle case incrcase decrecase events
document.getElementById('case-plus').addEventListener('click', function(){
        updeteProductNumber('case',59, true);
});

document.getElementById('case-mainus').addEventListener('click',function(){
    updeteProductNumber('case', 59, false );
  
});