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
      this.finalPrice = (this.basePrice + parseFloat(glazePrices[this.glazing])) * parseFloat(packPrices[this.size]);
      this.element = null;
  }
}

const rollSet = new Set();

//make four new roll objects and add them to your cart 
function newObjects() {
  itemsInCart.push(new Roll("Apple", "Keep original", 3, rolls["Apple"]["basePrice"]));
  itemsInCart.push(new Roll("Raisin", "Sugar milk", 3, rolls["Raisin"]["basePrice"]));
  itemsInCart.push(new Roll("Walnut", "Vanilla milk", 12, rolls["Walnut"]["basePrice"]));
  itemsInCart.push(new Roll("Original", "Sugar milk", 1, rolls["Original"]["basePrice"]));
}

newObjects();

function createElement(roll) {
  // make a clone of the template
  const template = document.querySelector('#cart-template');
  const clone = template.content.cloneNode(true);
  
  // connect this clone to our roll.element
  roll.element = clone.querySelector('.cartitem1');

  const btnDelete = roll.element.querySelector('.remove');
  console.log(btnDelete);
  btnDelete.addEventListener('click', () => {
    deleteNote(roll);
  });
  
  // add the roll clone to the DOM
  // find the parent and add our roll as its child
  const cartListElement = document.querySelector('.cartmaincontainer');
  cartListElement.prepend(roll.element);
  
  // populate the clone with the actual roll content
  updateElement(roll);

}

function updateElement(roll) {
  // get the HTML elements that need updating
  const rollImageElement = roll.element.querySelector('.cartimg');
  const rollPriceElement = roll.element.querySelector('.cartprice');
  const rollTypeElement = roll.element.querySelector('.type');
  const rollGlazingElement = roll.element.querySelector('.glazing');
  const rollSizeElement = roll.element.querySelector('.size');

  // copy our roll content over to the corresponding HTML elements
  finalPrice = (roll.basePrice + parseFloat(glazePrices[roll.glazing])) * parseFloat(packPrices[roll.size]);
  finalPrice = finalPrice.toFixed(2);
  
  rollImageElement.src = "assets/products/" + rolls[roll.type]["imageFile"];
  rollPriceElement.innerText = "$ " + finalPrice;
  rollTypeElement.innerText = roll.type + " Cinnamon Roll";
  rollGlazingElement.innerText = roll.glazing;
  rollSizeElement.innerText = "Pack Size: " + roll.size;
  
}

function deleteNote(roll) {
  // remove the DOM object from the UI
  roll.element.remove();
  const cartindex = itemsInCart.indexOf(roll);
  if (cartindex !== -1) {
    itemsInCart.splice(cartindex, 1);
  }
  changeTotalPrice();
}

for (const roll of itemsInCart) {
  console.log(roll);
  createElement(roll);
}

function changeTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < itemsInCart.length; i++) {
    totalPrice += itemsInCart[i].finalPrice;
  }
  const totalPriceElement = document.querySelector('.totalsum');
  totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

changeTotalPrice();







