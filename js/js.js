let objects = [];

function getProducts() { //api request
  fetch(
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
  )
    .then((response) => response.json())
    .then((jsonObj) => {
      objects = jsonObj["products"]; //response in json format
      loadProducts();  
    });
}

function loadProducts() {
  let element = document.getElementsByClassName("productGrid"); 
  let productGrid = element[0];
  
  for (let index = 0; index < objects.length; index++) { 
    let div = document.createElement("div");
    div.setAttribute('class','card')
    div.innerHTML =
      '<div class ="imgBox"> <img src="http:' +
      objects[index]["image"] +
      '"/>' + '</div>' + '<div class="cardDescBox">' +
      '<div class="productTitle">' +
      objects[index]["name"] +
      "</div>" +
      '<div class="productDesc">' +
      objects[index]["description"] +
      "</div>" +
      '<div class="oldPrice">De: R$' +
      objects[index]["oldPrice"] +
      '</div>' +
      '<div class="price">Por: R$' +
      objects[index]["price"] +
      "</div>" +
      '<div class="installment"> ou 2x de R$' +
      objects[index]["price"]/2 +
      "</div>" +
      '<input class="buyBtn" type="url" value="Comprar">' +
      '</div>' ;
    productGrid.appendChild(div);
  }
}

//let elemento  = document.body.getElementsByClassName('productNav')
//  console.log(elemento[0])
//  let div = document.createElement('div')
//  elemento[0].appendChild(div)
