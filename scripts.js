body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 1em;
    text-align: center;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
}

.product-card {
    border: 1px solid #ddd;
    padding: 1em;
    text-align: center;
    width: 200px;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-card img {
    max-width: 100%;
    height: auto;
}

.product-card button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.5em;
    margin: 0.5em;
    cursor: pointer;
}

.product-card button:hover {
    background-color: #45a049;
}

.buttons {
    margin-top: 1em;
}

.buttons button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.5em;
    margin: 0.5em;
    cursor: pointer;
}

.buttons button:hover {
    background-color: #45a049;
}
