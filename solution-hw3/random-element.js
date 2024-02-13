const startPrice = 2.49;

const glazePrice = {
  "original": 0,
  "sugar": 0,
  "vanilla": 0.50,
  "doublechoc": 1.50
};

const packPrice = {
  "1": 1,
  "3": 3,
  "6": 5,
  "12": 10
};

function calcTotalPrice() {
  selectedGlaze = document.querySelector("#dropdown1-glazing").value;
  selectedPack = document.querySelector("#dropdown1-pack").value;
  finalPrice = (startPrice + glazePrice[selectedGlaze]) * packPrice[selectedPack];
  return finalPrice.toFixed(2);
}

function updatePriceShown() {
  document.querySelector(".detailpricetext").textContent = "$" + calcTotalPrice();
}





