// change cart badge
function updateCartBadge() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.innerText = cart.length;
}

// parse URL parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// cart array
const cart = initiateCart();

// add to cart function
function addToCart() {
  let type = rollType;
  let selectedGlazing = document.querySelector('#dropdown1-glazing');
  let glazing = document.querySelector('#dropdown1-glazing').options[selectedGlazing.selectedIndex].text;
  let selectedPack = document.querySelector('#dropdown1-pack');
  let size = document.querySelector('#dropdown1-pack').options[selectedPack.selectedIndex].text;
  let price = rolls[rollType].basePrice;

  cart.push(new Roll(type, glazing, size, price));
  saveToLocalStorage();
  console.log('cart', localStorage.storedRolls);  
  updateCartBadge();
}

// save to local storage
function saveToLocalStorage() {
  //const cartArray = Array.from(cart);
  const cartString = JSON.stringify(Array.from(cart));
  console.log(cartString);
  localStorage.setItem('storedRolls', cartString);
}

// retrieve from local storage
function retrieveFromLocalStorage() {
  const cartString = localStorage.getItem('storedRolls');
  const cart = JSON.parse(cartString);
  if (cartString) {
      itemsInCart = JSON.parse(cartString);
  } else {
      itemsInCart = [];
  }
}
updateCartBadge();

function initiateCart() {
  if (localStorage.getItem('storedRolls') != null){
      const cart = JSON.parse(localStorage.getItem('storedRolls'));
      return cart;
  }
  else{
      return [];
  }
}
updateCartBadge();







