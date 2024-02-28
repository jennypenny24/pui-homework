const glazePrices = {
  "Keep original": 0,
  "Sugar milk": 0,
  "Vanilla milk": 0.50,
  "Double Chocolate": 1.50
};

const packPrices = {
  "1": 1,
  "3": 3,
  "6": 5,
  "12": 10
};
/*
for (const key in glazePrices) {
  option = document.createElement("option");
  option.text = key;
  option.value = glazePrices[key];
  document.querySelector("#dropdown1-glazing").appendChild(option);
}

for (const key in packPrices) {
  option = document.createElement("option");
  option.text = key;
  option.value = packPrices[key];
  document.querySelector("#dropdown1-pack").appendChild(option);
}

function calcTotalPrice() {
  selectedGlaze = document.querySelector("#dropdown1-glazing").value;
  selectedPack = document.querySelector("#dropdown1-pack").value;
  finalPrice = (basePrice + parseFloat(selectedGlaze)) * parseFloat(selectedPack);
  return finalPrice.toFixed(2);
}

function updatePriceShown() {
  document.querySelector(".detailpricetext").textContent = "$" + calcTotalPrice();
}

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//reassign so basePrice is based on what user clicks
let basePrice = rolls[rollType].basePrice;

//header
const headerElement = document.querySelector('h2');
headerElement.innerText = rollType + ' Cinnamon Roll';

//image 
const imgElement = document.querySelector('#detailpage-img');
imgElement.src = "assets/products/" + rolls[rollType]["imageFile"];

//price 
const priceElement = document.querySelector('.detailpricetext');
priceElement.innerText = '$' + rolls[rollType].basePrice;

const cart = [];

// class definition
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

// show in the console 
function addToCart() {
    let type = rollType;
    let selectedGlazing = document.querySelector('#dropdown1-glazing');
    let glazing = document.querySelector('#dropdown1-glazing').options[selectedGlazing.selectedIndex].text;
    let selectedPack = document.querySelector('#dropdown1-pack');
    let size = document.querySelector('#dropdown1-pack').options[selectedPack.selectedIndex].text;
    let price = rolls[rollType].basePrice;
    cart.push(new Roll(type, glazing, size, price));
    console.log(cart);
}

*/

//HW 5
//create an array or set to represent your cart 
const itemsInCart = [];

//create a roll class 
class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = rollPrice;
      this.element = null;
  }
}

const rollSet = new Set();

// This function creates a new Notecard object, and adds it to notecardSet.
function addNewRolls(imageURL, price, body) {
  // Create a new notecard object. The Notecard constructor takes three
  // arguments: the image URL, title text,  and body text.
  const notecard = new roll(imageURL, price, body);

  // Add the notecard object to our notecard Set, which keeps track of all
  // the notecards in our application.
  rollSet.add(roll);

  return roll;
}

//make four new roll objects and add them to your cart 
function newObjects() {
  itemsInCart.push(new Roll("Original", "Sugar milk", 1, rolls["Original"]["basePrice"]));
  itemsInCart.push(new Roll("Walnut", "Vanilla milk", 12, rolls["Walnut"]["basePrice"]));
  itemsInCart.push(new Roll("Raisin", "Sugar milk", 3, rolls["Raisin"]["basePrice"]));
  itemsInCart.push(new Roll("Apple", "Keep original", 3, rolls["Apple"]["basePrice"]));
}

newObjects();

function createElement(roll) {
  // make a clone of the notecard template
  const template = document.querySelector('#cart-template');
  const clone = template.content.cloneNode(true);
  
  // connect this clone to our notecard.element
  // from this point we only need to refer to notecard.element
  roll.element = clone.querySelector('.cartitem1');

  const btnDelete = roll.element.querySelector('.remove');
  console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    deleteNote(roll);
  });
  
  // add the notecard clone to the DOM
  // find the notecard parent (#notecard-list) and add our notecard as its child
  const cartListElement = document.querySelector('.cartmaincontainer');
  cartListElement.prepend(roll.element);
  
  // populate the notecard clone with the actual notecard content
  updateElement(roll);

}

function updateElement(roll) {
  // get the HTML elements that need updating
  /*
  const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
  const noteTitleElement = notecard.element.querySelector('.note-title');
  const noteBodyElement = notecard.element.querySelector('.note-body');
  */
  const rollImageElement = roll.element.querySelector('.cartimg');
  const rollPriceElement = roll.element.querySelector('.cartprice');
  const rollTypeElement = roll.element.querySelector('.type');
  const rollGlazingElement = roll.element.querySelector('.glazing');
  const rollSizeElement = roll.element.querySelector('.size');

  // copy our notecard content over to the corresponding HTML elements
  rollImageElement.src = "assets/products/" + rolls[roll.type]["imageFile"];
  console.log(rollImageElement.src);

  finalPrice = (roll.basePrice + parseFloat(glazePrices[roll.glazing])) * parseFloat(packPrices[roll.size]);
  finalPrice.toFixed(2);
  
  rollPriceElement.innerText = "$ " + finalPrice;
  rollTypeElement.innerText = roll.type;
  rollGlazingElement.innerText = roll.glazing;
  rollSizeElement.innerText = "Pack Size: " + roll.size;

  totalPrice = 0;
  itemsInCart.forEach(roll => totalPrice += finalPrice);
  const totalPriceElement = document.querySelector(".totalsum");
  totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

function deleteNote(roll) {
  // remove the notecard DOM object from the UI
  roll.element.remove();
  // remove the actual Notecard object from our set of notecards
  rollSet.delete(roll);
}

for (const roll of itemsInCart) {
  console.log(roll);
  createElement(roll);
}
/*
// update the total price field based on the current cart
function updateTotalPrice() {
  let totalPrice = 0;
  itemsInCart.forEach(roll => totalPrice += finalPrice);
  const totalPriceElement = document.querySelector(".totalsum");
  totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

for (const roll of itemsInCart) {
  console.log(roll);
  createElement(roll);
}

updateTotalPrice();
*/
//console.log(updateTotalPrice());


