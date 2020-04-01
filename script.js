var ingredients = ["🍅", "🧅", "🥒", "🧀", "🥩", "🥯", "🐟", "🥚"];

var allTheBurgers = {
  fishBurger: ["🐟", "🧀", "🥯", "🍅"],
  cheeseBurger: ["🥩", "🧅", "🧀", "🥯", "🍅"],
  comboBurger: ["🥩", "🐟", "🧀", "🥯", "🥚", "🥒", "🧅", "🍅"]
};

var burgerKey = ["fishBurger", "cheeseBurger", "comboBurger"];

var storeUserSelectection = [];
var storeBurgersToDisplay = [];
var score = 0;
var totalScore = 0;

//The burger recipes for different combination of burger

var beef = "🥩";
var fish = "🐟";
var egg = "🥚";
var burger = "🥯";
var cheese = "🧀";
var cucumber = "🥒";
var onion = "🧅";
var tomatoes = "🍅";

//Listing out all the ingredients
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
    console.log("error");
    console.log(storeUserSelectection);
    wrongOrderSound();
  }
};

var clearSelectedIngredients = function() {
  console.log("cleared");
  clearOrderSound();
  selectedIngredients.innerHTML = "";
  storeUserSelectection = [];
};

var test = function() {
  console.log("testing 1 2 3");
};

var putBeef = function() {
  storeUserSelectection.push("🥩");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥩";
  selectedDiv.appendChild(placeToCreate);
};

var putFish = function() {
  storeUserSelectection.push("🐟");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🐟";
  selectedDiv.appendChild(placeToCreate);
};

var putEgg = function() {
  storeUserSelectection.push("🥚");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥚";
  selectedDiv.appendChild(placeToCreate);
};

var putBurger = function() {
  storeUserSelectection.push("🥯");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥯";
  selectedDiv.appendChild(placeToCreate);
};

var putCheese = function() {
  storeUserSelectection.push("🧀");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🧀";
  selectedDiv.appendChild(placeToCreate);
};

var putCucumber = function() {
  storeUserSelectection.push("🥒");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥒";
  selectedDiv.appendChild(placeToCreate);
};

var putOnion = function() {
  storeUserSelectection.push("🧅");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🧅";
  selectedDiv.appendChild(placeToCreate);
};

var putTomato = function() {
  storeUserSelectection.push("🍅");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🍅";
  selectedDiv.appendChild(placeToCreate);
};

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

var endOfGame = function() {
  var gameEnds = document.getElementById("gameover");
  gameEnds.play();
  alert("GAME END! Refresh the page to start again!");
};

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

setInterval(putOrder, 7000);
setTimeout(endOfGame, 85000);
clearOrder.addEventListener("click", clearSelectedIngredients);
clickSubmit.addEventListener("click", checkIfOrderMatches);
selectedIngredients.addEventListener("click", test);
clickBeef.addEventListener("click", putBeef);
clickFish.addEventListener("click", putFish);
clickEgg.addEventListener("click", putEgg);
clickBurger.addEventListener("click", putBurger);
clickCheese.addEventListener("click", putCheese);
clickCucumber.addEventListener("click", putCucumber);
clickOnion.addEventListener("click", putOnion);
clickTomato.addEventListener("click", putTomato);
