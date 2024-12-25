document.addEventListener('DOMContentLoaded', function() {
    const productGallery = document.getElementById('product-gallery');
    const viewCartButton = document.getElementById('view-cart-button');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для загрузки продуктов с сервера
    async function loadProducts() {
        const response = await fetch('/api/products');
        const products = await response.json();
        displayProducts(products);
    }

    // Функция для отображения продуктов
    function displayProducts(products) {
        productGallery.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <button class="order-now-button">Заказать сейчас</button>
                <button class="add-to-cart-button">В корзину</button>
                <button class="view-button">Обзор</button>
            `;

            const orderNowButton = productCard.querySelector('.order-now-button');
            const addToCartButton = productCard.querySelector('.add-to-cart-button');
            const viewButton = productCard.querySelector('.view-button');

            orderNowButton.addEventListener('click', () => orderNow(product));
            addToCartButton.addEventListener('click', () => addToCart(product));
            viewButton.addEventListener('click', () => viewProduct(product));

            productGallery.appendChild(productCard);
        });
    }

    // Функция для заказа товара сейчас
    function orderNow(product) {
        window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=Я хочу заказать ${product.name}`);
    }

    // Функция для добавления товара в корзину
    function addToCart(product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Товар ${product.name} добавлен в корзину`);
    }

    // Функция для просмотра видео обзора товара
    function viewProduct(product) {
        window.open(product.video);
    }

    // Обработчик для кнопки "Просмотреть корзину"
    viewCartButton.addEventListener('click', () => {
        if (cart.length > 0) {
            const cartItems = cart.map(item => item.name).join(', ');
            window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=Я хочу заказать: ${cartItems}`);
        } else {
            alert('Ваша корзина пуста');
        }
    });

    // Загрузка продуктов при загрузке страницы
    loadProducts();
});

