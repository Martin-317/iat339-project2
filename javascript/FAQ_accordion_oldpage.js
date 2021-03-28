var reviewBut = document.getElementsByClassName('reviewButton');
var reviewF = document.getElementById('QA');


for(var i=0; i<reviewBut.length; i++){
    reviewBut[i].addEventListener("click", function(){
        // reviewAcc.toggle("active");
        // var panel = reviewAcc.nextElementSibling;
        if(reviewF.style.display === "grid"){
            reviewF.style.display = "none";
        }
        else{
            reviewF.style.display = "grid";
        }
    });

}


var shipping = document.getElementById('test_accordion');
var shippingContent = document.getElementById('sub_FAQ_shipping');

shipping.addEventListener("click", function(){

    if(shippingContent.style.display === "block"){
        shippingContent.style.display = "none";
        console.log("1  ");
    }
    else{
        shippingContent.style.display = "block";
    }
});