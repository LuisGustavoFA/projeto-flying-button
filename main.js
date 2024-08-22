const background = document.querySelector(".background");
const button = document.querySelector(".button");
const score = document.querySelector(".score");
const level = document.querySelector(".level");
const levelNumber = document.querySelector(".level-number");
levelNumber.innerHTML = 1;
score.innerHTML = 0;
score.style.color = "red";
background.style.backgroundColor = "gray";
let leftButtonPosition = 42;
let topButtonPosition = 42;
button.style.left = `${leftButtonPosition}vw`;
button.style.top = `${topButtonPosition}vh`;
let levelMultiplier = 10;

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
    if (leftButtonPosition < 10 || topButtonPosition < 20) {
        leftButtonPosition += Math.random() + 5;
        topButtonPosition += Math.random() + 2.5;
    }
    else if (leftButtonPosition > 90 || topButtonPosition > 80) {
        leftButtonPosition -= Math.random() + 5;
        topButtonPosition -= Math.random() + 2.5;
    }
    else if (rng >= 0 && rng < 25) {
        leftButtonPosition += Math.random();
        topButtonPosition += Math.random();
    } 
    else if (rng >= 25 && rng < 50){
        leftButtonPosition -= Math.random();
        topButtonPosition -= Math.random();
    }
    else if (rng >= 50 && rng < 75) {
        leftButtonPosition += Math.random();
        topButtonPosition -= Math.random();
    }
    else if (rng >= 75 && rng <= 100) {
        leftButtonPosition -= Math.random();
        topButtonPosition += Math.random();
    }
    changeButtonLocation(leftButtonPosition, topButtonPosition)
}, levelMultiplier);

function changeButtonLocation(left, top) {
    button.style.left = `${left}vw`;
    button.style.top = `${top}vh`;
}

level.addEventListener("click", () => {
    levelMultiplier += 10;
    levelNumber.innerHTML++;
    console.log(levelMultiplier);
    console.log(levelNumber.innerHTML);
})