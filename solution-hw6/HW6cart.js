

let itemsInCart = [];

// Product detail page
function addToCart(rollType, rollGlazing, packSize, rollPrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);
  itemsInCart.push(roll); // Add the new roll to the cart
  console.log("Item added to cart:", roll); 
  saveToLocalStorage(); // Save the updated cart to local storage
  updateCartBadge(); // Update the cart badge count
}

// Roll class
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

// Save cart to local storage
function saveToLocalStorage() {
  const cartArrayString = JSON.stringify(itemsInCart);
  console.log(cartArrayString);
  localStorage.setItem('cart', cartArrayString);
}

// Retrieve cart from local storage
function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem('cart');
  if (cartArrayString) {
    itemsInCart = JSON.parse(cartArrayString);
  } else {
    itemsInCart = [];
  }
}

// Initial population of the cart on page load
retrieveFromLocalStorage();

// DOM 
function createElement(roll) {
  const template = document.querySelector('#cart-template');
  const clone = template.content.cloneNode(true);
  roll.element = clone.querySelector('.cartitem1');

  const btnDelete = roll.element.querySelector('.remove');
  btnDelete.addEventListener('click', () => {
    const index = itemsInCart.indexOf(roll);
    if (index !== -1) {
      removeItem(index);
    }
  });

  const cartListElement = document.querySelector('.cartmaincontainer');
  cartListElement.appendChild(roll.element);

  updateElement(roll);
}

function updateElement(roll) {
  const rollImageElement = roll.element.querySelector('.cartimg');
  const rollPriceElement = roll.element.querySelector('.cartprice');
  const rollTypeElement = roll.element.querySelector('.type');
  const rollGlazingElement = roll.element.querySelector('.glazing');
  const rollSizeElement = roll.element.querySelector('.size');

  finalPrice = (roll.basePrice + parseFloat(glazePrices[roll.glazing])) * parseFloat(packPrices[roll.size]);
  finalPrice = finalPrice.toFixed(2);

  rollImageElement.src = "assets/products/" + rolls[roll.type]["imageFile"];
  rollPriceElement.innerText = "$ " + finalPrice;
  rollTypeElement.innerText = roll.type + " Cinnamon Roll";
  rollGlazingElement.innerText = roll.glazing;
  rollSizeElement.innerText = "Pack Size: " + roll.size;
}

// Remove item from cart
function removeItem(index) {
  itemsInCart.splice(index, 1);
  saveToLocalStorage();
  updateCartBadge(); // Update cart badge count
}

for (const roll of itemsInCart) {
  console.log(roll);
  createElement(roll);
}

// Calculate and update total price
function changeTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < itemsInCart.length; i++) {
    totalPrice += itemsInCart[i].finalPrice;
  }
  const totalPriceElement = document.querySelector('.totalsum');
  totalPriceElement.innerText = "$ " + totalPrice.toFixed(2);
}

//CART BADGE ICON PART 
function updateCartBadge() {
  const cartBadge = document.querySelector('.cartnumber');
  cartBadge.innerText = itemsInCart.length;
}

// Initial population of the cart on page load
retrieveFromLocalStorage();
updateCartBadge(); // Update cart badge count









