document.addEventListener('DOMContentLoaded', function() {
    const productGallery = document.getElementById('product-gallery');
    const whatsappButton = document.getElementById('whatsapp-button');
    const youtubeButton = document.getElementById('youtube-button');
    const addToCartButton = document.getElementById('add-to-cart-button');
    let selectedProduct = null;

    // Пример данных о продуктах
    const products = [
        { name: 'Товар 1', price: '100 руб.', image: 'image1.jpg', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { name: 'Товар 2', price: '200 руб.', image: 'image2.jpg', video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
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
            `;
            productCard.addEventListener('click', () => selectProduct(product));
            productGallery.appendChild(productCard);
        });
    }

    // Функция для выбора продукта
    function selectProduct(product) {
        selectedProduct = product;
        whatsappButton.style.display = 'inline-block';
        youtubeButton.style.display = 'inline-block';
        addToCartButton.style.display = 'inline-block';
    }

    // Обработчик для кнопки "Заказать"
    whatsappButton.addEventListener('click', () => {
        if (selectedProduct) {
            window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=Я хочу заказать ${selectedProduct.name}`);
        }
    });

    // Обработчик для кнопки "Обзор на YouTube"
    youtubeButton.addEventListener('click', () => {
        if (selectedProduct) {
            window.open(selectedProduct.video);
        }
    });

    // Обработчик для кнопки "В корзину"
    addToCartButton.addEventListener('click', () => {
        if (selectedProduct) {
            alert(`Товар ${selectedProduct.name} добавлен в корзину`);
            // Здесь можно добавить логику для добавления товара в корзину
        }
    });

    // Отображение продуктов при загрузке страницы
    displayProducts(products);
});

