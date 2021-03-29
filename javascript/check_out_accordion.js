var coNext = document.getElementsByClassName('CO_button');
var test = document.getElementById('shipping_button');
// var shippingContent = document.getElementById('sub_FAQ_shipping');
// var generalContent = document.getElementById('sub_FAQ_general');

for(var i=0; i<coNext.length; i++){
    coNext[i].addEventListener("click", function(){

        var panel = this.parentElement.previousElementSibling.previousElementSibling;
        var prev = this.parentElement.previousElementSibling;
        panel.style.display = "none";
        test.style.display = "none";
        prev.style.display = "grid";

        // if(panel.style.display === "grid"){
        //     console.log('previous is grid');
        //     panel.style.display = "none";
        // }
        // else{
        //     console.log('previous is not grid');
        //     panel.style.display = "grid";
        // }
    });
}


