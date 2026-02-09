

const heading = document.createElement("h1");
const para = document.createElement("p");
const headingText = document.createTextNode("Big Head!");
const paraText = document.createTextNode("Para Text!");
heading.appendChild(headingText);
para.appendChild(paraText);
document.body.appendChild(heading);
document.body.appendChild(para);

const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
    story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
});


