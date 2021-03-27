/*accordion */
var reviewAcc = document.getElementById('reviewForm');
var reviewF = document.getElementById('QA');

reviewAcc.addEventListener("click", function(){
    // reviewAcc.toggle("active");
    // var panel = reviewAcc.nextElementSibling;

    if(reviewF.style.display === "grid"){
        reviewF.style.display = "none";
    }
    else{
        reviewF.style.display = "grid";
    }
});
