// Base price
const startPrice = 2.49;

// Glazing options 
const glazePrice = {
  "original": 0,
  "sugar": 0,
  "vanilla": 0.50,
  "doublechoc": 1.50
};

// Pack size options 
const packPrice = {
  "1": 1,
  "3": 3,
  "6": 5,
  "12": 10
};

// Calculate total price
function calcTotalPrice() {
  const selectedGlazing = document.getElementById("dropdown1-glazing").value;
  const selectedPack = document.getElementById("dropdown1-pack").value;
  const totalPrice = (startPrice + glazePrice[selectedGlazing]) * packPrice[selectedPack];
  return totalPrice.toFixed(2);
}

// Update the displayed price
function updatePriceDisplay() {
  const totalPrice = calcTotalPrice();
  document.querySelector(".detailpricetext").textContent = "$" + totalPrice;
}

// Function called when the glazing or pack size option changes
document.getElementById("dropdown1-glazing").addEventListener("change", updatePriceDisplay);
document.getElementById("dropdown1-pack").addEventListener("change", updatePriceDisplay);

// Initial update of the price display
//updatePriceDisplay();
