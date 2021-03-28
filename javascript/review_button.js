/* from W3C*/
/*accordion */
// var reviewAcc = document.getElementById('reviewForm');
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

// reviewBut.addEventListener("click", function(){
//     // reviewAcc.toggle("active");
//     // var panel = reviewAcc.nextElementSibling;
//     if(reviewF.style.display === "grid"){
//         reviewF.style.display = "none";
//     }
//     else{
//         reviewF.style.display = "grid";
//     }
// });
