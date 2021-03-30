var shipping_next = document.getElementById('shipping_button');
var coNext = document.getElementsByClassName('CO_button');
var finished_shipping_info = document.getElementById('finished_shipping');
//billing variable
var billing_form = document.getElementById("co_billing_info");
var billing_check = document.getElementById('billing_ckeck');
var billing_info = document.getElementById('billing_add');
var billing_next = document.getElementById('billing_button');
//card variable 
var paymentImg = document.getElementById('payment_img');
var cardInfo = document.getElementById('card_info');

//cart variable
var cart = document.getElementById('cartAcc');
var cartProd = document.getElementById('cart_product');

//summary variable
var summary = document.getElementById('summaryAcc');
var summaryPrice = document.getElementById('summary_price');

//query selector
var x = window.matchMedia("(max-width: 54rem)");

//filling shipping info and click next
shipping_next.addEventListener("click", function(){
    var panel = this.parentElement.previousElementSibling.previousElementSibling;
    var prev = this.parentElement.previousElementSibling;
    //shipping info
    panel.style.display = "none";
    shipping_next.style.display = "none";
    prev.style.display = "grid";
    //billing info
    billing_check.style.display = "block";
    co_billing_info.style.display = "grid";
    // billing_info.style.display = "grid";
    billing_next.style.display = "inline-block";
});


//show hided billing info
function show_hide_billing_info(){
    var checkBox = document.getElementById('same_info');
    if(checkBox.checked == true){
        billing_info.style.display = "grid";
        co_billing_info.style.display = "none";
    }
    else{
        billing_info.style.display = "none";
    }
}


//billing next button 
billing_next.addEventListener("click",function(){
    //hide shipping info
    finished_shipping_info.style.display = "none";
    //hide billing info
    billing_check.style.display = "none";
    billing_form.style.display = "none";
    billing_info.style.display = "none";
    billing_next.style.display = "none";
    //show card info
    paymentImg.style.display = "flex";
    cardInfo.style.display = "block";
});

//cart&summary
cart.addEventListener("click",function(){
    if(x.matches){
        if(cartProd.style.display === "block"){
            cartProd.style.display = "none";
        }
        else{
            cartProd.style.display = "block";
        }
    }    
});


summary.addEventListener("click", function(){
    if(x.matches){
        if(summaryPrice.style.display === "block"){
            summaryPrice.style.display = "none";
        }
        else{
            summaryPrice.style.display = "block";
        }
    }

});

//show car&summary function
function showBlock(){
    if(x.matches){
        if(summaryPrice.style.display === "block" || cartProd.style.display === "block"){
            cartProd.style.display = "none";   
            summaryPrice.style.display = "none";
        }
    }
    else{
        if(summaryPrice.style.display === "none" || cartProd.style.display === "none"){
            cartProd.style.display = "block";   
            summaryPrice.style.display = "block";
        }
    }
}

//function call
x.addListener(showBlock);