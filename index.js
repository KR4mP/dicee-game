var h1tag = document.querySelector("h1");

var randomNumber1 = Math.random() * 6 + 1;
var randomNumber2 = Math.random() * 6 + 1;

document.querySelector(".img1").setAttribute("src", "images/dice"+ Math.floor(randomNumber1) +".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ Math.floor(randomNumber2) +".png");

if (Math.floor(randomNumber1) > Math.floor(randomNumber2)) {
    h1tag.textContent = "Player 1 Wins.";
} else if (Math.floor(randomNumber1) < Math.floor(randomNumber2)) {
    h1tag.textContent = "Player 2 Wins.";
} else {
    h1tag.textContent = "Draw";
}