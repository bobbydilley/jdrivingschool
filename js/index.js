var slideIndex = 0;
var sayIndex = 0;
showSlides();
showSayItems();

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");

    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[slideIndex].style.display = "block";

    if (slideIndex == slides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
}


function showSayItems() {
    var slides = document.getElementsByClassName("say-item");

    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[sayIndex].style.display = "block";

    if (sayIndex == slides.length - 1) {
        sayIndex = 0;
    } else {
        sayIndex++;
    }
}

setInterval(function () {
    showSayItems();
}, 14000);

setInterval(function () {
    showSlides();
}, 7000);
