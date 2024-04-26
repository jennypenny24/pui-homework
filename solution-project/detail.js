// change cart badge
function updateCartBadge() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.innerText = cart.length;
  }

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
} 

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

// parse URL parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// extract roll info
function getRollInfo() {
    let roll = rolls[rollType];

    //header
    const headerElement = document.querySelector('h2');
    headerElement.innerText = rollType + ' Cinnamon Roll';

    //image 
    const imgElement = document.querySelector('#detailpage-img');
    imgElement.src = "assets/products/" + rolls[rollType]["imageFile"];

    //price 
    const priceElement = document.querySelector('.detailpricetext');
    priceElement.innerText = '$' + roll.basePrice;
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

  let basePrice = rolls[rollType].basePrice;

window.onload = getRollInfo();

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
        //const cartString = localStorage.getItem('storedRolls');
        const cart = JSON.parse(localStorage.getItem('storedRolls'));
        return cart;
    }
    else{
        return [];
    }
}
updateCartBadge();

















