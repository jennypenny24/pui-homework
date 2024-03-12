// Retrieve cart from local storage or create an empty cart array
//let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart to local storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to print current contents of the cart in local storage
function printCart() {
    console.log(JSON.parse(localStorage.getItem('cart')));
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item from the cart array
    cart.splice(index, 1);

    // Save the updated cart to local storage
    saveCart();

    // Print the current contents of the cart in local storage
    printCart();

    // Remove the corresponding entry from the DOM
    const cartItem = document.querySelectorAll('.cartitem1')[index];
    cartItem.remove();

    // Update the total price field
    changeTotalPrice();
}

// Function to initialize the page
function initializePage() {
    // Attempt to retrieve the cart from local storage
    // If no cart exists in the storage, create an empty cart array
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Populate the DOM with all of the items in the current cart
    for (const roll of cart) {
        createElement(roll);
    }

    // Add event listeners to "Remove" links
    const removeLinks = document.querySelectorAll('.remove');
    removeLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            removeFromCart(index);
        });
    });
}

// Call initializePage function when the page loads
document.addEventListener('DOMContentLoaded', initializePage);









