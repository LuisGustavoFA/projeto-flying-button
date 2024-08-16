const background = document.querySelector(".background");
const button = document.querySelector(".button");
const score = document.querySelector(".score");
score.innerHTML = 0;
score.style.color = "red";
background.style.backgroundColor = "gray";
let leftButtonPosition = 42;
let topButtonPosition = 42;
button.style.left = `${leftButtonPosition}vw`;
button.style.top = `${topButtonPosition}vh`;

document.addEventListener("click", (e) => manageClick(e));

function manageClick(e) {
    let colorA = "black";
    let colorB = "gray";

    if (background.style.backgroundColor == colorA) {
        background.style.backgroundColor = colorB;
        score.style.color = colorA;
    } else {
        background.style.backgroundColor = colorA;
        score.style.color = colorB;
    }

    if (e.target.className == button.className) score.innerHTML++;
    else {
        score.innerHTML = 0;
        score.style.color = "red";
    }
}

setInterval(() => {
    const rng = Math.round(Math.random() * 100);
    if (leftButtonPosition < 15 || topButtonPosition < 20) {
        leftButtonPosition += Math.random() + 5;
        topButtonPosition += Math.random() + 2.5;
    }
    if (leftButtonPosition > 85 || topButtonPosition > 80) {
        leftButtonPosition -= Math.random() + 5;
        topButtonPosition -= Math.random() + 2.5;
    }
    if (rng >= 0 && rng < 25) {
        leftButtonPosition += Math.random();
        topButtonPosition += Math.random();
    } 
    if (rng >= 25 && rng < 50){
        leftButtonPosition -= Math.random();
        topButtonPosition -= Math.random();
    }
    if (rng >= 50 && rng < 75) {
        leftButtonPosition += Math.random();
        topButtonPosition -= Math.random();
    }
    if (rng >= 75 && rng <= 100) {
        leftButtonPosition -= Math.random();
        topButtonPosition += Math.random();
    }
    changeButtonLocation(leftButtonPosition, topButtonPosition)
}, 10);

function changeButtonLocation(left, top) {
    button.style.left = `${left}vw`;
    button.style.top = `${top}vh`;
}