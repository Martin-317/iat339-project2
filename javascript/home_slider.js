var x = window.matchMedia("(max-width: 52rem)")
var slideIndex = 1;
var slideIndexLa = 1;


function topSeller(){
    if(x.matches){
        showSlides(slideIndex);
    }  
    else{
        var slides = document.getElementsByClassName("mySlides"); 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";  
        }        
    }
}

function latestArrival(){
    if(x.matches){
        latestShowSlides(slideIndexLa);
    }  
    else{
        var slides = document.getElementsByClassName("mySlidesLa"); 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";  
        }        
    }
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function plusSlidesLa(n) {
    latestShowSlides(slideIndexLa += n);
}

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//for top seller
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides"); 
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }   
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block"; 
}

//for latest arrival
function latestShowSlides(n){

    var i;
    var slides = document.getElementsByClassName("mySlidesLa"); 
    if (n > slides.length) {
        slideIndexLa = 1;
    }    
    if (n < 1) {
        slideIndexLa = slides.length;
    }   
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndexLa-1].style.display = "block"; 
}

topSeller();
latestArrival();
x.addListener(topSeller);
x.addListener(latestArrival);


