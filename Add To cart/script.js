let products = []; // store product data -> fatch

let cart = []; // store item -> shoppinf cart

// fetching Products from JSON
async function fetchProducts() {
  try {
    const response = await fetch("products.json");
    products = await response.json();
    displayProducts();
  } catch (error) {
    console.log("Error fetching products : ", error);
  }
}

function displayProducts(filterText = "", sort = "") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  let filterProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  if (sort === "low") {
    filterProducts.sort((a, b) => a.price - b.price); // assending order sort
  } else if (sort === "high") {
    filterProducts.sort((a, b) => b.price - a.price); // descending order sort
  }

  filterProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        
        <img src = "${product.image}" alt = "${product.name}">
        <h3>${product.name}</h3>
        <p>₹ ${product.price}</p>
        <button onclick = "addToCart(${product.id})">Add to cart</button>
        `;

    productList.appendChild(productCard);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existingItem = cart.find((item) => item.id === id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity:1});
  }

  
updateCartCount();
}   


function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.reduce((total,item) => total + item.quantity,0)
}


// Viewing the Cart


function viewCart() {
  const cartPage = document.getElementById("cartPage");
  cartPage.classList.remove("hidden");

  const cartitems = document.getElementById("cart-items");
  cartitems.innerHTML = "";

  if (cart.length === 0) {
    cartitems.innerHTML = `<p>Your cart is empty</p>`;
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    <button onclick = "decrementCart(${item.id})">-</button>
    <span>${item.quantity}</span>
     <button onclick = "incrementCart(${item.id})">+</button>
    
    `;

    cartitems.appendChild(cartItem);
  });

}


// Increment and decrement cart items

function incrementCart(id){
  cart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
  viewCart();
  updateCartCount();
}

function decrementCart(id){
 cart = cart.map((item) =>
   item.id === id ? { ...item, quantity: item.quantity - 1 } : item
 ).filter(item => item.quantity>0);
 viewCart();
 updateCartCount();
}

fetchProducts();
