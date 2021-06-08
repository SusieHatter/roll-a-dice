var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice = document.getElementsByClassName("dice");
dice[0].setAttribute("src", "./resources/images/dice" + randomNumber1 + ".png");
dice[1].setAttribute("src", "./resources/images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.getElementById("title").innerHTML = "Player 1 won!";
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("title").innerHTML = "Player 2 won!";
} else {
  document.getElementById("title").innerHTML = "Draw!";
}
