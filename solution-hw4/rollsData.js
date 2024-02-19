const rolls = {
  "Original": {
      "basePrice": 2.49,
      "imageFile": "original-cinnamon-roll.jpg"
  },
  "Apple": {
      "basePrice": 3.49,
      "imageFile": "apple-cinnamon-roll.jpg"
  },
  "Raisin": {
      "basePrice": 2.99,
      "imageFile": "raisin-cinnamon-roll.jpg"
  },
  "Walnut": {
      "basePrice": 3.49,
      "imageFile": "walnut-cinnamon-roll.jpg"
  },
  "Double-Chocolate": {
      "basePrice": 3.99,
      "imageFile": "double-chocolate-cinnamon-roll.jpg"
  },
  "Strawberry": {
      "basePrice": 3.99,
      "imageFile": "strawberry-cinnamon-roll.jpg"
  }    
};

// Parse URL parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// extract roll info
function extractRoll() {
    let roll = rolls[rollType];
    let rollBasePrice = roll.basePrice;

    const headerElement = document.querySelector('#roll-name');
    headerElement.innerText = rollType + ' Cinnamon Roll';

    const imgElement = document.querySelector('#main-img');
    imgElement.src = 'assets/products/' + imageFile;

    const priceElement = document.querySelector('#priceId');
    priceElement.innerText = '$'+rollBasePrice;

}






