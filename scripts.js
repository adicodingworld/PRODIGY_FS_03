document.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    function renderProducts() {
        const productContainer = document.getElementById('product-list');
        productContainer.innerHTML = '';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-card';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                <p class="product-price">₹${product.price}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === parseInt(productId));
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.getElementById('product-list').addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            addToCart(event.target.dataset.id);
        }
    });

    // Function to reset star rating
    function resetStarRating() {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.remove('selected');
            star.classList.remove('hover');
        });
    }

    // Event listener for the review form submission
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add review submission logic here

        // Reset star rating after review submission
        resetStarRating();
    });

    renderProducts();
});
