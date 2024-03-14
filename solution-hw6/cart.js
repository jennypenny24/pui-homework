class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

// glazing prices object
const glazingPrices = {
  "Keep original": 0,
  "Sugar milk": 0,
  "Vanilla milk": 0.5,
  "Double Chocolate": 1.5
}

// pack size prices object
const packSizePrices = {
  "1": 1,
  "3": 3,
  "6": 5,
  "12": 10
}

function initiateCart() {
  if (localStorage.getItem('storedRolls') != null){
      const cart = JSON.parse(localStorage.getItem('storedRolls'));
      return cart;
  }
  else{
      return [];
  }
}

let finalCartPrice = 0;

// cart array
const cart = initiateCart();

// making a new cart item
function newCartItem(roll) {
  const template = document.querySelector('#cart-template');
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector('.cartitem1');

  const btnRemove = roll.element.querySelector('.remove');
  btnRemove.addEventListener('click', () => {
      removeCartItem(roll);
      updateCartBadge();
  });  

  const rollListElement = document.querySelector('.cartmaincontainer');
  rollListElement.prepend(roll.element);
  updateElement(roll);
}

// update roll element
function updateElement(roll) {
  const rollImageElement = roll.element.querySelector('.cartimg');
  const rollPriceElement = roll.element.querySelector('.cartprice');
  const rollTypeElement = roll.element.querySelector('.type');
  const rollGlazingElement = roll.element.querySelector('.glazing');
  const rollSizeElement = roll.element.querySelector('.size');
  const rollCartTotal = document.querySelector('.totalsum')
  
  rollTotalPrice = ((roll.basePrice+glazingPrices[roll.glazing])*packSizePrices[roll.size]).toFixed(2);
  finalCartPrice = finalCartPrice + Number(rollTotalPrice);

  rollImageElement.src = "assets/products/" + rolls[roll.type]["imageFile"];
  rollPriceElement.innerText = '$' + rollTotalPrice;
  rollTypeElement.innerText = roll.type + " Cinnamon Roll";
  rollGlazingElement.innerText = roll.glazing;
  rollSizeElement.innerText = "Pack Size: " + roll.size;
  rollCartTotal.innerText = '$' + finalCartPrice;
}

// retrieve from local storage
function retrieveFromLocalStorage() {
  const cartString = localStorage.getItem('storedRolls');
  const cart = JSON.parse(cartString);
  for (const rollData of cart){
      newCartItem(rollData);
  }
}

// save to local storage
function saveToLocalStorage() {
  const cartString = JSON.stringify(Array.from(cart));
  console.log(cartString);
  localStorage.setItem('storedRolls', cartString);
}

// remove cart item
function removeCartItem(roll) {
  roll.element.remove();
  const {element, ...rest} = Object.assign({}, roll);
  const stringRoll = JSON.stringify(rest);

  let index = -1
  for (i=0; cart.length; i++){
      cartIndexString = JSON.stringify(cart[i]);
      if (cartIndexString == stringRoll){
          index = i;
          break;
      };
  }
  cart.splice(index, 1);
  saveToLocalStorage();
  console.log('cart', localStorage.storedRolls);
  
  const rollTotalPrice = ((roll.basePrice+glazingPrices[roll.glazing])*packSizePrices[roll.size]).toFixed(2);
  document.querySelector('.totalsum').innerText = '$' + (finalCartPrice - rollTotalPrice).toFixed(2);
}

// call retrieveFromLocalStorage
if (localStorage.getItem('storedRolls') != null){
  retrieveFromLocalStorage();
}
updateCartBadge();

// change cart badge
function updateCartBadge() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.innerText = cart.length;
}




