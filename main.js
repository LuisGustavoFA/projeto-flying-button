const button = document.querySelector(".button");
const score = document.querySelector(".score");
const level = document.querySelector(".level");
const levelNumber = document.querySelector(".level-number");
levelNumber.innerHTML = 1;
score.innerHTML = 0;
let leftButtonPosition = 42;
let topButtonPosition = 42;
button.style.left = `${leftButtonPosition}vw`;
button.style.top = `${topButtonPosition}vh`;
let levelMultiplier = 100;

document.addEventListener("click", (e) => {
    if (e.target.className == button.className) score.innerHTML++;
    else score.innerHTML = 0;
});

setInterval(() => {
    const rng = Math.round(Math.random() * 100);
    const correcaoX = Math.random() + 5;
    const correcaoY = Math.random() + 2.5;
    const randomDirection = (Math.random() * 2) - (levelMultiplier / 100);

    if (leftButtonPosition < 10 || topButtonPosition < 20) {
        leftButtonPosition += correcaoX;
        topButtonPosition += correcaoY;
    }
    else if (leftButtonPosition > 90 || topButtonPosition > 80) {
        leftButtonPosition -= Math.random() + 5;
        topButtonPosition -= Math.random() + 2.5;
    }
    else if (rng >= 0 && rng < 25) {
        leftButtonPosition += randomDirection;
        topButtonPosition += randomDirection;
    } 
    else if (rng >= 25 && rng < 50){
        leftButtonPosition -= randomDirection;
        topButtonPosition -= randomDirection;
    }
    else if (rng >= 50 && rng < 75) {
        leftButtonPosition += randomDirection;
        topButtonPosition -= randomDirection;
    }
    else if (rng >= 75 && rng <= 100) {
        leftButtonPosition -= randomDirection;
        topButtonPosition += randomDirection;
    }
    changeButtonLocation(leftButtonPosition, topButtonPosition)
    console.log(levelMultiplier);
}, levelMultiplier);

function changeButtonLocation(left, top) {
    button.style.left = `${left}vw`;
    button.style.top = `${top}vh`;
}

level.addEventListener("click", () => {
    if (levelNumber.innerHTML < 4) {
        levelNumber.innerHTML++;
        levelMultiplier -= 30;
        
    } else {
        levelNumber.innerHTML = 1;
        levelMultiplier = 100;
    }
    console.log(levelMultiplier);
    console.log(levelNumber.innerHTML);
})