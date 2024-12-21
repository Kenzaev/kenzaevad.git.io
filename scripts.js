document.addEventListener('DOMContentLoaded', function() {
    // Пример данных продуктов
    const products = [
        { image: 'gallery/bin.jpg', name: 'Тов 1', price: '1000 руб.' },
        { image: 'gallery/rop.jpg', name: 'Тар 2', price: '200 руб.' },
        { image: 'gallery/you.jpg', name: 'Тоар 3', price: '3000 руб.' }
    ];

    const gallery = document.getElementById('product-gallery');
    const whatsappButton = document.getElementById('whatsapp-button');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('div');
        name.classList.add('product-name');
        name.textContent = product.name;

        const price = document.createElement('div');
        price.classList.add('product-price');
        price.textContent = product.price;

        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);

        productDiv.addEventListener('click', function() {
            whatsappButton.style.display = 'inline-block';
            whatsappButton.addEventListener('click', function() {
                window.open(`https://wa.me/+79964684744?text=Я хочу заказать ${product.name}`, '_blank');
            });
        });

        gallery.appendChild(productDiv);
    });

    document.getElementById('youtube-button').addEventListener('click', function() {
        window.open('https://www.youtube.com/dQw4w9WgXcQ', '_blank');
    });
});

