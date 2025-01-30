// Memuat produk ke halaman
const productList = document.querySelector('.product-list');
const cartItems = document.querySelector('.cart-items');
let cart = [];

function loadProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productElement);
    });
}

// Menambahkan produk ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Memperbarui tampilan keranjang
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - Rp ${item.price.toLocaleString()}</p>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    cartItems.innerHTML += `<p><strong>Total: Rp ${total.toLocaleString()}</strong></p>`;
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert(`Terima kasih telah berbelanja! Total pembayaran: Rp ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}`);
        cart = [];
        updateCart();
    } else {
        alert('Keranjang belanja Anda kosong.');
    }
});

// Memuat produk saat halaman dimuat
window.onload = loadProducts;