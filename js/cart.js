const products = [
  {
    id: 1,
    name: "Iron",
    pice: 23000.0,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "AC",
    pice: 150000.0,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Shoe",
    pice: 13000.0,
    img: "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-33/Holiday-Mode/Gaming.png",
  },
  {
    id: 4,
    name: "Shirt",
    pice: 5000.0,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Phone",
    pice: 198000.0,
    img: "https://via.placeholder.com/150",
  },
];

let cart = [];
function displayProducts() {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>Price: $${product.pice.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productsContainer.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    cart.push(product);
    //update
    displayProducts();
    displayCart();
  }
}

function displayCart() {
  let cartCunt = document.getElementById("cart-count");
  cartCunt.innerHTML = "";
  if (cart.length === 0) {
    cartCunt.innerHTML = `<span>0</span>`;
  } else {
    cart.forEach((item) => {
      const carItem = document.createElement(`div`);
      carItem.classList.add("cart-item");
      carItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-details">
     <p class="cart-item-name">${item.name}</p>
      <p class="cart-item-price">${item.pice}</p>
      </div>
      `;
      cartCunt.appendChild(carItem);
    });
  }
}

displayProducts();
displayCart();

console.log(cart);
