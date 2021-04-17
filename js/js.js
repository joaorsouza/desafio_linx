let products = [];
let page = 1;
let url =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=";

function getProducts() {
  
  fetch(url + page)//api request
    .then((response) => response.json())
    .then((jsonObj) => {
      products = jsonObj["products"]; //response in json format
      loadProducts();
    });
}

function loadProducts() {
  let element = document.getElementsByClassName("productGrid");
  let productGrid = element[0];

  for (let index = 0; index < products.length; index++) { //iterate over the products array to build the html products cards
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML =
      '<div class ="imgBox"> <img src="http:' +
      products[index]["image"] +
      '"/>' +
      "</div>" +
      '<div class="cardDescBox">' +
      '<div class="productTitle">' +
      products[index]["name"] +
      "</div>" +
      '<div class="productDesc">' +
      products[index]["description"] +
      "</div>" +
      '<div class="oldPrice">De: R$' +
      products[index]["oldPrice"] +
      "</div>" +
      '<div class="price">Por: R$' +
      products[index]["price"] +
      "</div>" +
      '<div class="installment"> ou 2x de R$' +
      products[index]["price"] / 2 +
      "</div>" +
      '<input class="buyBtn" type="button" value="Comprar">' +
      "</div>";
    productGrid.appendChild(div);
    page++; // next page
  }
}


