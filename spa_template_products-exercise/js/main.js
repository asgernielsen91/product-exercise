"use strict";
console.log("er der forbindelse?");
// =========== Single Page Application functionality =========== //

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
  setActiveTab(pageId);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

// set default page
function setDefaultPage() {
  let page = "products";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

// =========== Product functionality =========== //

let products = [{
  model: 'Macbook Air 13,3',
  brand: 'Apple',
  price: '7897',
  img: 'https://www.elgiganten.dk/image/dv_web_D18000100258664/MACAMQD32DKA/macbook-air-133-mqd32.jpg?$prod_all4one$'
}, {
  model: 'Acer Chromebook 14',
  brand: 'Acer',
  price: '2499',
  img: 'https://www.elgiganten.dk/image/dv_web_D180001002278503/48834/acer-chromebook-14-baerbar-computer-guld.jpg?$prod_all4one$'
}, {
  model: 'Lenovo Yoga 14',
  brand: 'Lenovo',
  price: '7999',
  img: 'https://www.elgiganten.dk/image/dv_web_D180001002283139/47868/lenovo-yoga-c740-14-2-i-1-iron-gray.jpg?$prod_all4one$'
}, {
  model: 'Asus Gaming 15,5',
  brand: 'Asus',
  price: '7999',
  img: 'https://www.elgiganten.dk/image/dv_web_D180001002243807/32203/asus-gaming-tuf-fx505dt-155-baerbar-gamingcomputer-sortguld.jpg?$fullsize$'
}, {
  model: 'HP Pavilion Gaming 15,6',
  brand: 'HP',
  price: '5497',
  img: 'https://www.elgiganten.dk/image/dv_web_D180001002203870/16640/hp-pavilion-gaming-15-cx0818no-156-baerbar-computer-shadow-black.jpg?$prod_all4one$'
}];

function appendProducts(products) {
  let htmlTemplate = "";
  for (let product of products) {
    console.log(product);
    htmlTemplate += `
    <article>
    <img src="${product.img}">
    <h2>${product.model}</h2>
    <h3>${product.brand}</h3>
    <p>Price: ${product.price} kr.</p>
    </article>
    `;
  }
  document.querySelector('#products-container').innerHTML = htmlTemplate;
}

appendProducts(products);

function addNewProduct() {
  let brand = document.querySelector('#brand').value;
  let model = document.querySelector('#model').value;
  let price = document.querySelector('#price').value;
  let img = document.querySelector('#img').value;

  let newProduct = {
    brand: brand,
    model: model,
    price: price,
    img: img
  };


  console.log(newProduct);
  products.push(newProduct);
  console.log(products);
  appendProducts(products);
  document.querySelector('#brand').value = "";
  document.querySelector('#model').value = "";
  document.querySelector('#price').value = "";
  document.querySelector('#img').value = "";
  showPage('products');

}

function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredProducts = [];
  for (let product of products) {
    let model = product.model.toLowerCase();
    let brand = product.brand.toLowerCase();
    if (model.includes(searchQuery) || brand.includes(searchQuery)) {
      filteredProducts.push(product);
    }
  }
  console.log(filteredProducts);
  appendProducts(filteredProducts);
}