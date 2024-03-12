// Retrieve cart from local storage or create an empty cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart to local storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to print current contents of the cart in local storage
function printCart() {
    console.log(JSON.parse(localStorage.getItem('cart')));
}

// Function to handle "Add to Cart" button click event
function addToCart() {
    // Gather information about the selected options
    let rollType = document.querySelector('#roll-type').innerText;
    let rollGlazing = document.querySelector('#dropdown1-glazing').value;
    let packSize = document.querySelector('#dropdown1-pack').value;
    let rollPrice = parseFloat(document.querySelector('.detailpricetext').innerText.replace('$', ''));

    // Create a new Roll instance
    let newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);

    // Add the new Roll instance to the cart array
    cart.push(newRoll);

    // Save the updated cart to local storage
    saveCart();

    // Print the current contents of the cart in local storage
    printCart();
}

// Function to initialize the page
function initializePage() {
    // Attempt to retrieve the cart from local storage
    // If no cart exists in the storage, create an empty cart array
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add event listener to "Add to Cart" button
    document.querySelector('.addbtn').addEventListener('click', addToCart);
}

// Call initializePage function when the page loads
document.addEventListener('DOMContentLoaded', initializePage);








