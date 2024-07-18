const cart = [];

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Limpiar el carrito

    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}</p>
            <button class="remove-button" data-index="${index}">Eliminar</button>
        `;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Función para manejar el clic en el botón de agregar al carrito
function handleBuyButtonClick(event) {
    const button = event.target;
    const productDiv = button.closest('.product');
    const productName = productDiv.getAttribute('data-product-name');
    const productPrice = parseFloat(productDiv.getAttribute('data-product-price'));

    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Función para manejar el clic en el botón de eliminar del carrito
function handleRemoveButtonClick(event) {
    const button = event.target;
    const index = parseInt(button.getAttribute('data-index'));
    cart.splice(index, 1);
    updateCart();
}

// Agregar el evento de clic a todos los botones de compra
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', handleBuyButtonClick);
});

// Agregar el evento de clic a todos los botones de eliminar del carrito
document.getElementById('cart-items').addEventListener('click', event => {
    if (event.target.classList.contains('remove-button')) {
        handleRemoveButtonClick(event);
    }
});