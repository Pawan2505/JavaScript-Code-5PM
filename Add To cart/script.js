let products = []  // store product data -> fatch

let cart = []  // store item -> shoppinf cart

// fetching Products from JSON
async function fetchProducts() {
    try {
        const response = await fetch("products.json")
        products = await response.json();
        displayProducts();
    } catch (error) {
        console.log("Error fetching products : ",error)
    }
}

function displayProducts(filterText = "", sort = "") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    let filterProducts = products.filter((p) =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sort === "low") {
        filterProducts.sort((a,b)=>a.price - b.price)   // assending order sort
    } else if (sort === "high") {
         filterProducts.sort((a, b) => b.price - a.price); // descending order sort
    }

    filterProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
        productCard.innerHTML = `
        
        <img scr = "${product.image}" alt = "${product.name}">
        <h3>${product.name}</h3>
        <p>₹ ${product.price}</p>
        <button onclick = "addToCart(${product.id})">Add to cart</button>
        `;

        productList.appendChild(productCard);
    })
}

displayProducts()