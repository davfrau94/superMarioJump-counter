//body
const pageContainer = document.createElement("div");
pageContainer.className = "container";
document.body.appendChild(pageContainer);
const marioImg = document.createElement("img");
marioImg.id = "mario-gif";
marioImg.src = "/assets/img/marioJump.png";
marioImg.alt = "Super Mario";
pageContainer.appendChild(marioImg);

//header
const header = document.createElement("header");
header.className = "header";
pageContainer.appendChild(header);
const titleBox = document.createElement("section");
titleBox.className = "title-container";
header.appendChild(titleBox);
const title = document.createElement("h1");
title.className = "title";
title.textContent = "Super Mario Jumps Counter";
titleBox.appendChild(title);

//social
const socialContainer = document.createElement("section");
socialContainer.className = "social-container";
pageContainer.appendChild(socialContainer);
const gitSocial = document.createElement("div");
gitSocial.id = "github";
socialContainer.appendChild(gitSocial);

const gitLogo = document.createElement("a");
gitLogo.href = "https://github.com/davfrau94";
gitLogo.target = "_blank";
gitSocial.appendChild(gitLogo);
const gitImg = document.createElement("img");
gitImg.src = "/assets/img/github.png";
gitImg.alt = "github icon";
gitLogo.appendChild(gitImg);

const linkedinSocial = document.createElement("div")
linkedinSocial.id = "linkedin";
socialContainer.appendChild(linkedinSocial);
const linkedinLogo = document.createElement("a");
linkedinLogo.href = "https://www.linkedin.com/in/davide-frau/";
linkedinLogo.target = "_blank";
linkedinSocial.appendChild(linkedinLogo);
const linkedinImg = document.createElement("img");
linkedinImg.src = "/assets/img/linkedin.png";
linkedinImg.alt = "linkedin icon";
linkedinLogo.appendChild(linkedinImg);

//counter & display
const counterContainer = document.createElement("section");
counterContainer.className = "counter-container"
pageContainer.appendChild(counterContainer);

const displayContainer = document.createElement("section");
displayContainer.className = "display-container";
counterContainer.appendChild(displayContainer);
const displayP = document.createElement("p");
displayP.id = "display";
displayP.textContent = "0";
displayContainer.appendChild(displayP);
let counter = 0;
let display = document.getElementById("display");

//+, -, reset buttons
const buttonContainer = document.createElement("section");
buttonContainer.className = "button-container";
counterContainer.appendChild(buttonContainer);
const minusButton = document.createElement("div");
const plusButton = document.createElement("div");
const resetButton = document.createElement("div");
minusButton.className = "counter-minus button";
plusButton.className = "counter-plus button";
resetButton.className = "counter-reset button";
buttonContainer.appendChild(minusButton);
buttonContainer.appendChild(plusButton);
buttonContainer.appendChild(resetButton);
let button1 = createButton("-", counterMinus);
let button2 = createButton("+", counterPlus);
let button3 = createButton("Reset", counterReset);
minusButton.appendChild(button1);
plusButton.appendChild(button2);
resetButton.appendChild(button3);

//createButton & counter functions
function createButton(text, event) {
    let button = document.createElement("button");
    button.innerHTML = text;
    if(event) {
        button.addEventListener("click", event);
    }
    return button;
};
function counterPlus() {
    counter ++;
    updateDisplay();
};
function counterMinus() {
    if (counter > 0){
    counter --;
    updateDisplay();
    }
};
function counterReset() {
    counter = 0;
    updateDisplay();
};
function updateDisplay() {
    display.innerHTML = counter;
};
//Start button
const startContainer = document.createElement("section");
startContainer.className = "start-container";
buttonContainer.appendChild(startContainer);
const startButton = document.createElement("div")
startButton.className = "start-button";
startContainer.appendChild(startButton);
let button4 = createButton("Start");
startButton.appendChild(button4);

button4.addEventListener("click", function() {
    if (button4.textContent == "Start") {
        document.getElementById("mario-gif").src = "/assets/img/marioJump.gif"
        button4.textContent = "Stop";
    }   else {
        document.getElementById("mario-gif").src = "/assets/img/marioJump.png";
        button4.textContent = "Start";
    }
});