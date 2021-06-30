"use strict"


let slideIndex = 0;
let i = 0;
let slides = document.getElementsByClassName("header__imgContainer");
let slideLen = slides.length;


const showSlide = n =>{
    console.log(n);
    let slide;
    if (n>slideLen-1) {slideIndex=0};
    console.log(slideIndex)
    if (n<0) {slideIndex =slideLen-1};
    for (slide of slides ){
        slide.style.display = "none"
    }
 
   slides[slideIndex].style.display = "inline";

}
const currentSlide = n => {showSlide(slideIndex =n), clearInterval(intervalo) }

function plusSlide () {
    slideIndex++;
    showSlide(slideIndex)
}

showSlide(slideIndex);

var intervalo = setInterval(plusSlide, 5600);










