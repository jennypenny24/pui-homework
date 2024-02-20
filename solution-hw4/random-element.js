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
