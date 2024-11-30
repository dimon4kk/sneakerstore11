// Дані про кросівки
const products = [
    { id: 1, name: "Nike Air Max", brand: "Nike", price: 120, image: "sneaker1.jpg", link: "product1.html" },
    { id: 2, name: "Adidas Ultraboost", brand: "Adidas", price: 150, image: "sneaker2.jpg", link: "product2.html" },
    { id: 3, name: "Puma RS-X", brand: "Puma", price: 100, image: "sneaker3.jpg", link: "product3.html" },
    { id: 4, name: "New Balance 574", brand: "New Balance", price: 110, image: "sneaker4.jpg", link: "product4.html" },
    { id: 5, name: "Reebok Classic", brand: "Reebok", price: 90, image: "sneaker5.jpg", link: "product5.html" },
    { id: 6, name: "Salomon Quest 4 Gtx MID FUR", brand: "Salamon", price: 80, image: "sneaker6.jpg", link: "product6.html" },
    { id: 7, name: "Nike air jordan 4 retro", brand: "Nike", price: 130, image: "sneaker7.jpg", link: "product7.html" },
    { id: 8, name: "Adidas Campus 00s x KORN Black", brand: "Adidas", price: 140, image: "sneaker8.jpg", link: "product8.html" }
];

// Відображення продуктів на головній сторінці
function displayProducts(filterBrand = "all") {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    const filteredProducts = filterBrand === "all" ? products : products.filter(product => product.brand === filterBrand);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p>На жаль, немає продуктів цього бренду.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Бренд: ${product.brand}</p>
                <p>Ціна: $${product.price}</p>
                <a href="${product.link}">Детальніше</a>
            </div>
        `;
    });
}

// Функція для оновлення продуктів при зміні фільтра
function setupFilter() {
    const filterElement = document.getElementById("brandFilter");
    filterElement.addEventListener("change", (event) => {
        displayProducts(event.target.value);
    });
}

// Запуск функцій
window.onload = () => {
    displayProducts();
    setupFilter();
};
