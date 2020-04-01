var allTheBurgers = {
  fishBurger: ["🐟", "🧀", "🥯", "🍅"],
  cheeseBurger: ["🥩", "🧅", "🧀", "🥯", "🍅"],
  comboBurger: ["🥩", "🐟", "🧀", "🥯", "🥚", "🥒", "🧅", "🍅"]
};
//The burger recipes for different combination of burger
var burgerKey = ["fishBurger", "cheeseBurger", "comboBurger"];

var storeUserSelectection = [];
var storeBurgersToDisplay = [];
var score = 0;
var totalScore = 0;
//These variables are needed to store certain data for usage later on

var clickSubmit = document.querySelector("#submit-button");
var clickBeef = document.querySelector("#ingredient-beef");
var clickFish = document.querySelector("#ingredient-fish");
var clickEgg = document.querySelector("#ingredient-egg");
var clickBurger = document.querySelector("#ingredient-burger");
var clickCheese = document.querySelector("#ingredient-cheese");
var clickCucumber = document.querySelector("#ingredient-cucumbers");
var clickOnion = document.querySelector("#ingredient-onions");
var clickTomato = document.querySelector("#ingredient-tomatoes");
var selectedIngredients = document.querySelector(".selected-ingredients");
var ordersIncoming = document.querySelector(".incoming-orders");
var showScore = document.querySelector("#scoreboard");
var clearOrder = document.querySelector("#clear-button");
//QuerySelector for all the item which we are using

var checkIfOrderMatches = function(burgerToDisplay) {
  score = storeBurgersToDisplay[0].length;
  if (storeUserSelectection.join("") === storeBurgersToDisplay[0].join("")) {
    correctAnswerSound();
    selectedIngredients.innerHTML = "";
    storeBurgersToDisplay.splice(0, 1);
    ordersIncoming.removeChild(ordersIncoming.childNodes[0]);
    storeUserSelectection = [];
    console.log(storeUserSelectection);
    console.log(score);
    totalScore += score;
    console.log(totalScore);
    showScore.innerText = `Score = ${totalScore}`;
  } else {
    console.log("The correct order is" + storeBurgersToDisplay[0]);
    wrongOrderSound();
  }
};
//The checkIfOrderMatches functions help to check between what the user submitted &
// - between what is on the position[0] of Burgers to Display

var create = function(char) {
  storeUserSelectection.push(char);
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = char;
  selectedDiv.appendChild(placeToCreate);
};
//The function create(char) creates the ingredient the user clicked on and append it onto the selected space

var clearSelectedIngredients = function() {
  clearOrderSound();
  selectedIngredients.innerHTML = "";
  storeUserSelectection = [];
};
//The function clearSelectedIngredients clears all the item which the users had selected.

//=============================================
var putBeef = function() {
  create("🥩");
};

var putFish = function() {
  create("🐟");
};

var putEgg = function() {
  create("🥚");
};

var putBurger = function() {
  create("🥯");
};

var putCheese = function() {
  create("🧀");
};

var putCucumber = function() {
  create("🥒");
};

var putOnion = function(event) {
  create("🧅");
};

var putTomato = function() {
  create("🍅");
};
//=============================================
//These functions will create the selected contents to be passed into the create function

var putOrder = function() {
  var ordersIncoming = document.getElementById("incoming");
  var burgersDisplay = document.createElement("h1");
  burgersDisplay.className = "col";
  var index = Math.floor(Math.random() * 3);
  var key = burgerKey[index];
  var burgerToDisplay = allTheBurgers[key];
  var burgers = "";
  var newOrdersArray = [];

  for (i = 0; i < burgerToDisplay.length; i++) {
    burgers = burgers + burgerToDisplay[i];
    newOrdersArray.push(burgerToDisplay[i]);
  }
  storeBurgersToDisplay.push(newOrdersArray);
  if (ordersIncoming.childElementCount < 3) {
    burgersDisplay.innerHTML = burgers;
    ordersIncoming.appendChild(burgersDisplay);
  }
};
//This function puts the order into the screen

var endOfGame = function() {
  var gameEnds = document.getElementById("gameover");
  gameEnds.play();
  alert("GAME END! Refresh the page to start again!");
};
//function to indicate Game has ended with the gameover sound function inside

//===================================================
function correctAnswerSound() {
  var right = document.getElementById("correct");
  right.play();
}

function clearOrderSound() {
  var clear = document.getElementById("clear-order");
  clear.play();
}

function wrongOrderSound() {
  var wrong = document.getElementById("wrong");
  wrong.play();
}
//===================================================
//These are the functions for the sounds

setInterval(putOrder, 7000);
setTimeout(endOfGame, 85000);

clickBeef.addEventListener("click", putBeef);
clickFish.addEventListener("click", putFish);
clickEgg.addEventListener("click", putEgg);
clickBurger.addEventListener("click", putBurger);
clickCheese.addEventListener("click", putCheese);
clickCucumber.addEventListener("click", putCucumber);
clickOnion.addEventListener("click", putOnion);
clickTomato.addEventListener("click", putTomato);
clearOrder.addEventListener("click", clearSelectedIngredients);
clickSubmit.addEventListener("click", checkIfOrderMatches);
