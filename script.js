console.log("Fishburger Or Cheeseburger?");
console.log("hello");

var ingredients = ["🍅", "🧅", "🥒", "🧀", "🥩", "🥯", "🐟", "🥚"];

var allTheBurgers = {
  fishBurger: ["🐟", "🧀", "🥯", "🍅"],
  cheeseBurger: ["🥩", "🧅", "🧀", "🥯", "🍅"],
  comboBurger: ["🥩", "🐟", "🧀", "🥯", "🥚", "🥒", "🧅", "🍅"]
};

var burgerKey = ["fishBurger", "cheeseBurger", "comboBurger"];

var storeUserSelectection = [];

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

var test = function() {
  console.log(storeUserSelectection.join(""));
  console.log(burgerToDisplay);
  // console.log("Testing 1,2,3!");
  // if (storeUserSelectection.join("") === burgerToDisplay[0])
  //   console.log("it works");
};

var putBeef = function() {
  console.log("beef");
  storeUserSelectection.push("🥩");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥩";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putFish = function() {
  console.log("fish");
  storeUserSelectection.push("🐟");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🐟";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putEgg = function() {
  console.log("egg");
  storeUserSelectection.push("🥚");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥚";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putBurger = function() {
  console.log("burger!");
  storeUserSelectection.push("🥯");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥯";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putCheese = function() {
  console.log("cheese!");
  storeUserSelectection.push("🧀");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🧀";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putCucumber = function() {
  console.log("Cucumbers!");
  storeUserSelectection.push("🥒");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🥒";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putOnion = function() {
  console.log("cucumbers!");
  storeUserSelectection.push("🧅");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🧅";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putTomato = function() {
  console.log("tomatoes");
  storeUserSelectection.push("🍅");
  var selectedDiv = document.getElementById("selected-space");
  var placeToCreate = document.createElement("h1");
  placeToCreate.textContent = "🍅";
  selectedDiv.appendChild(placeToCreate);
  console.log(storeUserSelectection);
};

var putOrder = function() {
  console.log("hello");
  var list = document.getElementById("incoming");
  var test = document.createElement("h1");
  var index = Math.floor(Math.random() * 3);
  var key = burgerKey[index];
  var burgerToDisplay = allTheBurgers[key];
  var burgers = "";
  for (i = 0; i < burgerToDisplay.length; i++) {
    burgers = burgers + burgerToDisplay[i];
  }
  test.innerHTML = burgers;
  list.appendChild(test);
  console.log(burgers);
  console.log(burgerToDisplay);
};

setInterval(putOrder, 8000);

clickSubmit.addEventListener("click", test);
selectedIngredients.addEventListener("click", test);
clickBeef.addEventListener("click", putBeef);
clickFish.addEventListener("click", putFish);
clickEgg.addEventListener("click", putEgg);
clickBurger.addEventListener("click", putBurger);
clickCheese.addEventListener("click", putCheese);
clickCucumber.addEventListener("click", putCucumber);
clickOnion.addEventListener("click", putOnion);
clickTomato.addEventListener("click", putTomato);
