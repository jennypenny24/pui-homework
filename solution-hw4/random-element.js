//const startPrice = 2.49;

const glazePrices = {
  "Original": 0,
  "Sugar": 0,
  "Vanilla": 0.50,
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

// Parse URL parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//reassign so basePrice is based on what user clicks
let basePrice = rolls[rollType].basePrice;

//change header
    const headerElement = document.querySelector('h2');
    headerElement.innerText = rollType + ' Cinnamon Roll';

//change image 
    const imgElement = document.querySelector('#main-img');
    imgElement.src = "assets/products/" + rolls[rollType]["imageFile"];

//change price 
    const priceElement = document.querySelector('#priceId');
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

// show what was added to cart in the console 
function addToCart() {
    let type = rollType;
    let selectedchoice1 = document.querySelector('#dropdown1-glazing');
    let glazing = selectedchoice1.options[selectedchoice1.selectedIndex].text;
    let selectedchoice2 = document.querySelector('#dropdown1-pack');
    let size = selectedchoice2.options[selectedchoice2.selectedIndex].text;
    let price = rolls[rollType].basePrice;
    //let addRoll = new Roll(type, glazing, size, price);
    cart.push(new Roll(type, glazing, size, price));
    console.log(cart);
}
