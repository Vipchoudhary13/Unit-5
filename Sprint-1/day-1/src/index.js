import {mult} from "./cal";
import("./index.css");
import image from "./logo.png";

console.log(mult(25,26));

const img = document.createElement("img");
img.src = image;
document.getElementById("logo").appendChild(img);

let note = document.getElementById("notes");
let submit = document.querySelector(".submit");
submit.addEventListener("click", (e) =>{
    e.preventDefault();

    addNotes()
});

function addNotes(){
    let noteVal = note.value;
    let list = document.createElement("li");
    list.classList.add("list");
    list.innerHTML = `<li>${noteVal}</li>`

    document.querySelector(".show").appendChild(list);
}

// const input = document.createElement("input");
// input.placeholder = "Write Your Note";
// input.classList.add("head");
// document.getElementById("note").appendChild(input);

// const input1 = document.createElement("submmit");
// document.getElementById("note").appendChild(input1);

// const data = input.value;
// document.getElementById("show").innerHTML = data;



