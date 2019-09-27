"use strict";

const buttonNext = document.querySelector(".btnnext");
const buttonPrevious = document.querySelector(".btnprevious");
const li = document.querySelectorAll("li");
let positionImg = 0;

function nextImage() {
    positionImg++;

    if (positionImg === li.length) {
        positionImg = 0;
    }

    for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
    }

    li[positionImg].classList.add("active");
    

}

function previousImage() {
    positionImg++;

    if (positionImg === li.length) {
        positionImg = -1;
    }

    for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
    }

    li[positionImg].classList.add("active");
    

}


buttonNext.addEventListener("click", nextImage);
buttonPrevious.addEventListener("click", previousImage);