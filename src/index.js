import "./styles.css"

import {dropdown} from "./dropdown.js"
import {previouslist, nextlist} from "./carousel.js"


let petButton = document.querySelector("#petitems");
let fruitButton = document.querySelector("#fruititems")
let dropdownpet = document.querySelector("#dropdown-content");
let dropdownfruit = document.querySelector("#dropdown-fruit");

let previousarrow = document.querySelector("#left");
let nextarrow = document.querySelector("#right");

//when clicking this button for pets, it will hide or show the list
petButton.addEventListener('click', ()=> {
    dropdown(dropdownpet);
})

//when click this button for fruits, it will hide or show the list
fruitButton.addEventListener('click', () => {
    dropdown(dropdownfruit);
})

previousarrow.addEventListener('click', () => {
    previouslist();
})

nextarrow.addEventListener('click', () => {
    nextlist();
})

setInterval(nextlist, 5000);