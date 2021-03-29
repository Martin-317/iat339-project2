var reviewBut = document.getElementsByClassName('reviewButton');
var reviewF = document.getElementById('QA');


// for(var i=0; i<reviewBut.length; i++){
//     reviewBut[i].addEventListener("click", function(){
//         // reviewAcc.toggle("active");
//         // var panel = reviewAcc.nextElementSibling;
//         if(reviewF.style.display === "grid"){
//             reviewF.style.display = "none";
//         }
//         else{
//             reviewF.style.display = "grid";
//         }
//     });

// }


var shipping = document.getElementsByClassName('FAQ_accordion');
// var shippingContent = document.getElementById('sub_FAQ_shipping');
// var generalContent = document.getElementById('sub_FAQ_general');

for(var i=0; i<shipping.length; i++){
    shipping[i].addEventListener("click", function(){
        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    });
}




