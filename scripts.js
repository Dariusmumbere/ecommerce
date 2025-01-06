// Initialize empty cart
let cart = [];

// Get references to DOM elements
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Add event listener to the cart icon to open the cart modal
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block';
    displayCartItems();
});

// Add event listener to the close button to close the cart modal
closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.getAttribute('data-name');
        const productPrice = parseFloat(productCard.getAttribute('data-price'));
        
        // Add product to cart
        addToCart(productId, productName, productPrice);
    });
});

// Function to add products to the cart
function addToCart(id, name, price) {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === id);
    
    if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        cart[existingProductIndex].quantity++;
    } else {
        // If the product is not in the cart, add it with quantity 1
        cart.push({ id, name, price, quantity: 1 });
    }

    // Update cart icon and total price
    updateCart();
}

// Function to update the cart icon and total price
function updateCart() {
    // Update cart count
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

// Function to display cart items in the modal
function displayCartItems() {
    cartItems.innerHTML = '';  // Clear current items
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

// Checkout button event (currently just displays a message)
checkoutBtn.addEventListener('click', () => {
    alert('Proceeding to checkout...');
    cart = [];  // Clear the cart after checkout
    updateCart();  // Update the cart UI
});

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
    
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (!productName.includes(query)) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
});