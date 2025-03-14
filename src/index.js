import "./styles.css"
import {dropdown} from "./dropdown.js"

let petButton = document.querySelector("#petitems");
let fruitButton = document.querySelector("#fruititems")
let dropdownpet = document.querySelector("#dropdown-content");
let dropdownfruit = document.querySelector("#dropdown-fruit");

//when clicking this button for pets, it will hide or show the list
petButton.addEventListener('click', ()=> {
    dropdown(dropdownpet);
})

//when click this button for fruits, it will hide or show the list
fruitButton.addEventListener('click', () => {
    dropdown(dropdownfruit);
})

