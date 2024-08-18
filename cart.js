document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Define product details
    const productDetails = {
        '1': { name: 'Apple iPhone 15 (Blue, 128 GB)', price: '69,999' },
        '2': { name: 'Apple iPhone 15 (Pink, 128 GB)', price: '69,999' },
        '3': { name: 'Apple iPhone 15 (Green, 128 GB)', price: '69,999' },
        '4': { name: 'Apple iPhone 15 (Yellow, 512 GB)', price: '99,999' },
        '5': { name: 'realme P1 Pro 5G (Parrot Blue, 256 GB) (8 GB RAM)', price: '19,999' },
        '6': { name: 'realme P1 Pro 5G (Phoenix Red, 256 GB) (8 GB RAM)', price: '19,999' },
        '7': { name: 'HP Intel Core i5 13th Gen', price: '76,899' },
        '8': { name: 'HP Pavilion Gaming AMD Ryzen 5 Hexa Core 5600H', price: '68,990' },
        '9': { name: 'Acer One (2024) Intel Core i3 11th Gen 1115G4', price: '22,990' },
        '10': { name: 'Acer Predator Neo (2023) Intel Core i7 13th Gen 13700HX', price: '99,990' },
        '11': { name: 'Apple 2022 MacBook AIR Apple M2', price: '87,990' },
        '12': { name: 'HP Victus AI Powered AMD Ryzen 7 Octa Core 7840HS', price: '78,990' },
        '13': { name: 'Lenovo IdeaPad Slim 5 WUXGA-OLED Intel Core i7 13th Gen 13620H', price: '79,990' },
        '14': { name: 'Lenovo Yoga 7 WUXGA-OLED Intel Core i7 13th Gen 1360P', price: '99,990' },
        '15': { name: 'Casual Sneaker Shoes for Men', price: '1,474' },
        '16': { name: 'Sports Casual Running Shoes For Men', price: '1,176' }
    };

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            let total = 0;
            cart.forEach(item => {
                const product = productDetails[item.id];
                if (product) {
                    const itemTotal = parseFloat(product.price.replace('₹', '').replace(',', '')) * item.quantity;
                    total += itemTotal;
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>₹${product.price} x ${item.quantity}</p>
                        <p>Total: ₹${itemTotal.toFixed(2)}</p>
                        <button class="remove-from-cart" data-id="${item.id}">Remove</button>
                    `;
                    cartItems.appendChild(cartItem);
                }
            });
            cartItems.innerHTML += `<h3>Total: ₹${total.toFixed(2)}</h3>`;
        }
    }

    function removeFromCart(productId) {
        cart = cart.map(item => {
            if (item.id === productId) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return null; // Remove item if quantity is 1
                }
            }
            return item;
        }).filter(item => item !== null);
        saveCart();
        renderCart();
    }

    document.getElementById('cart-items').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = event.target.dataset.id;
            removeFromCart(productId);
        }
    });

    document.getElementById('checkout-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Order submitted successfully!');
    });

    renderCart();
});
