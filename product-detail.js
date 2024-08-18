document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

   const productDetails = {
        '1': {
            name: 'Apple iPhone 15 (Blue, 128 GB)',
            price: '₹69,999',
            description: '128 GB ROM<br>15.49 cm (6.1 inch) Super Retina XDR Display<br>48MP + 12MP | 12MP Front Camera<br>A16 Bionic Chip, 6 Core Processor Processor',
            image: 'p1.jpg'
        },
        '2': {
            name: 'Apple iPhone 15 (Pink, 128 GB)',
            price: '₹69,999',
            description: '128 GB ROM<br>15.49 cm (6.1 inch) Super Retina XDR Display<br>48MP + 12MP | 12MP Front Camera<br>A16 Bionic Chip, 6 Core Processor Processor',
            image: 'p2.jpg'
        },
        '3': {
            name: 'Apple iPhone 15 (Green, 128 GB)',
            price: '₹69,999',
            description: '128 GB ROM<br>15.49 cm (6.1 inch) Super Retina XDR Display<br>48MP + 12MP | 12MP Front Camera<br>A16 Bionic Chip, 6 Core Processor Processor',
            image: 'p3.jpg'
        },
        '4': {
            name: 'Apple iPhone 15 (Yellow, 512 GB)',
            price: '₹99,999',
            description: '512 GB ROM<br>15.49 cm (6.1 inch) Super Retina XDR Display<br>48MP + 12MP | 12MP Front Camera<br>A16 Bionic Chip, 6 Core Processor Processor',
            image: 'p4.jfif'
        },
        '5': {
            name: 'realme P1 Pro 5G (Parrot Blue, 256 GB) (8 GB RAM)',
            price: '₹19,999',
            description: '8 GB RAM | 256 GB ROM<br>17.02 cm (6.7 inch) Full HD+ Display<br>50MP + 8MP | 16MP Front Camera<br>5000 mAh Battery<br>6 Gen 1 Processor',
            image: 'p5.webp'
        },
        '6': {
            name: 'realme P1 Pro 5G (Phoenix Red, 256 GB) (8 GB RAM)',
            price: '₹19,999',
            description: '8 GB RAM | 256 GB ROM<br>17.02 cm (6.7 inch) Full HD+ Display<br>50MP + 8MP | 16MP Front Camera<br>5000 mAh Battery<br>6 Gen 1 Processor',
            image: 'p6.jpg'
        },
        '7': {
            name: 'HP Intel Core i5 13th Gen',
            price: '₹76,899',
            description: '15.6 inch Full HD, 144 Hz, IPS Anti-Glare Micro-edge WLED-Backlit, Brightness: 250 nits, 141 ppi, Color Gamut: 45% NTSC<br>Light Laptop without Optical Disk Drive<br>Pre-installed Genuine Windows 10 OS<br>Preloaded with MS Office',
            image: 'p7.webp'
        },
        '8': {
            name: 'HP Pavilion Gaming AMD Ryzen 5 Hexa Core 5600H',
            price: '₹68,990',
            description: 'HP Intel Core i5 13th Gen - (16 GB/512 GB SSD/Windows 11 Home/Intel Integrated intel hd) 14-ek1074TU 2 in 1 Gaming Laptop  (14 inch, Silver, With MS Office)',
            image: 'p8.webp'
        },
        '9': {
            name: 'Acer One (2024) Intel Core i3 11th Gen 1115G4',
            price: '₹22,990',
            description: 'Intel Core i3 Processor (11th Gen)<br>8 GB DDR4 RAM<br>64 bit Windows 11 Operating System<br>512 GB SSD<br>35.56 cm (14 Inch) Display<br>1 Year Warranty',
            image: 'p9.jfif'
        },
        '10': {
            name: 'Acer Predator Neo (2023) Intel Core i7 13th Gen 13700HX',
            price: '₹99,990',
            description: 'Intel Core i7 Processor (13th Gen)<br>16 GB DDR5 RAM<br>Windows 11 Operating System<br>1 TB SSD<br>40.64 cm (16 Inch) Display<br>1 Year International Travelers Warranty (ITW)',
            image: 'p10.webp'
        },
        '11': {
            name: 'Apple 2022 MacBook AIR Apple M2',
            price: '₹87,990',
            description: 'Apple M2 Processor<br>8 GB Unified Memory RAM<br>Mac OS Operating System<br>256 GB SSD<br>34.54 cm (13.6 Inch) Display<br>Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player<br>1 Year Limited Warranty',
            image: 'p11.webp'
        },
        '12': {
            name: 'HP Victus AI Powered AMD Ryzen 7 Octa Core 7840HS',
            price: '₹78,990',
            description: 'AMD Ryzen 7 Octa Core Processor<br>16 GB DDR5 RAM<br>64 bit Windows 11 Operating System<br>512 GB SSD<br>40.89 cm (16.1 Inch) Display<br>Microsoft Office 2021<br>1 Year Onsite Warranty',
            image: 'p12.webp'
        },
        '13': {
            name: 'Lenovo IdeaPad Slim 5 WUXGA-OLED Intel Core i7 13th Gen 13620H',
            price: '₹79,990',
            description: 'Intel Core i7 Processor (13th Gen)<br>16 GB LPDDR5 RAM<br>Windows 11 Operating System<br>512 GB SSD<br>35.56 cm (14 Inch) Display<br>Microsoft Office Home & Student 2021<br>1Yr Warranty + 1 Yr Premium Care and 1 Yr Accidental Damage Protection',
            image: 'p13.jpg'
        },
        '14': {
            name: 'Lenovo Yoga 7 WUXGA-OLED Intel Core i7 13th Gen 1360P',
            price: '₹99,990',
            description: 'Intel Core i7 Processor (13th Gen)<br>16 GB LPDDR5 RAM<br>Windows 11 Operating System<br>1 TB SSD<br>35.56 cm (14 inch) Touchscreen Display<br>1Yr Warranty + 1 Yr Premium Care and 1 Yr Accidental Damage Protection',
            image: 'p14.webp'
        },
        '15': {
            name: 'Casual Sneaker Shoes for Men',
            price: '₹1,474',
            description: 'Casual Sneaker Shoes for Men<br>Elegantly Rounded Front, Soothing Insole Sneakers For Men  (Blue, Grey , 10)',
            image: 'p15.webp'
        },
        '16': {
            name: 'Sports Casual Running Shoes For Men',
            price: '₹1,176',
            description: 'Sports Casual Running Shoes For Men  (White , 8)',
            image: 'p16.webp'
        }
    };

    const product = productDetails[productId];

    if (product) {
        document.getElementById('product-title').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').innerHTML = product.description;
        document.getElementById('product-image').src = product.image;
        
        document.getElementById('add-to-cart').addEventListener('click', () => {
            addToCart(productId);
        });

        loadReviews(productId);

        const stars = document.querySelectorAll('#star-rating .star');
        stars.forEach(star => {
            star.addEventListener('mouseover', handleStarHover);
            star.addEventListener('mouseout', handleStarMouseOut);
            star.addEventListener('click', handleStarClick);
        });

        document.getElementById('review-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const rating = document.getElementById('rating').value;
            const reviewText = document.getElementById('review-text').value;
            submitReview(productId, rating, reviewText);
        });
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Product not found</p>';
    }
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}

function loadReviews(productId) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    let productReviews = reviews[productId] || [];

    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = '';

    if (productReviews.length > 0) {
        productReviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.innerHTML = `
                <div class="review-rating">Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <div class="review-text">${review.text}</div>
            `;
            reviewsList.appendChild(reviewElement);
        });
    } else {
        reviewsList.innerHTML = '<p>No reviews yet.</p>';
    }
}

function submitReview(productId, rating, reviewText) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productId]) {
        reviews[productId] = [];
    }

    reviews[productId].push({
        rating: parseInt(rating, 10),
        text: reviewText
    });

    localStorage.setItem('reviews', JSON.stringify(reviews));
    loadReviews(productId);
}

function handleStarHover(e) {
    const value = e.target.getAttribute('data-value');
    updateStarClasses(value);
}

function handleStarMouseOut() {
    const selectedRating = document.getElementById('rating').value;
    updateStarClasses(selectedRating);
}

function handleStarClick(e) {
    const value = e.target.getAttribute('data-value');
    document.getElementById('rating').value = value;
    updateStarClasses(value);
}

function updateStarClasses(rating) {
    const stars = document.querySelectorAll('#star-rating .star');
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}
