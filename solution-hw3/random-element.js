const startPrice = 2.49;

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
  finalPrice = (startPrice + parseFloat(selectedGlaze)) * parseFloat(selectedPack);
  return finalPrice.toFixed(2);
}

function updatePriceShown() {
  document.querySelector(".detailpricetext").textContent = "$" + calcTotalPrice();
}

