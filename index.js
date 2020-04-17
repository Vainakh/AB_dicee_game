let randomNumber1 = Math.floor(Math.random() * 6) + 1;//random number between  1 and 6;

let randomDiceImg1 = "dice" + randomNumber1 + ".png";//random image;
let randomImgSource1 = "images/" + randomDiceImg1;//images.dice1.png - /images.dice6.png;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSource1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;//random number between  1 and 6;
let randomDiceImg2 = "dice" + randomNumber2 + ".png";//random image;
let randomImgSource2 = "images/" + randomDiceImg2;//images.dice1.png - /images.dice6.png;  
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }