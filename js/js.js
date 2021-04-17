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
      "<div>" +
      objects[index]["name"] +
      "</div>" +
      "<div>" +
      objects[index]["description"] +
      "</div>" +
      "<div>" +
      objects[index]["oldPrice"] +
      "</div>" +
      "<div>" +
      objects[index]["price"] +
      "</div>" +
      "<div> ou 2x de " +
      objects[index]["price"]/2 +
      "</div> </div>";
    productGrid.appendChild(div);
  }
}

//let elemento  = document.body.getElementsByClassName('productNav')
//  console.log(elemento[0])
//  let div = document.createElement('div')
//  elemento[0].appendChild(div)
