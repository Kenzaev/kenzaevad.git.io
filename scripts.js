document.addEventListener('DOMContentLoaded', function() {
    const productGallery = document.getElementById('product-gallery');
    const viewCartButton = document.getElementById('view-cart-button');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Пример данных о продуктах
    const products = [
        { name: 'Товар 1', price: '100 руб.', image: 'image1.jpg', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { name: 'Товар 2', price: '200 руб.', image: 'image2.jpg', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { name: 'Товар 3', price: '150 руб.', image: 'image3.jpg', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { name: 'Товар 4', price: '250 руб.', image: 'image4.jpg', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ];

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

    // Отображение продуктов при загрузке страницы
    displayProducts(products);
});
