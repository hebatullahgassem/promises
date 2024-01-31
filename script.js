const container = document.querySelector('.container');

const request = new XMLHttpRequest();

request.open("GET", "https://dummyjson.com/products");
request.send();

request.addEventListener("load", function(){
  if(request.status === 404) handleErr();
  const {products} = JSON.parse(this.responseText);
    products.forEach(product => {
      //card
      const cardContainer = document.createElement('div');
      cardContainer.className = 'card';
      container.appendChild(cardContainer);

      //product title
      const title = document.createElement('h4');
      title.textContent = product.title;
      cardContainer.appendChild(title);

      //product descripsion
      const description = document.createElement('p');
      description.textContent = product.description;
      cardContainer.appendChild(description);

      //product image
      const image = document.createElement('img');
      image.src = product.images[0];
      image.className = 'img';
      cardContainer.appendChild(image);

      //product price
      const price = document.createElement('h5');
      price.textContent = `${product.price} EGP`;
      cardContainer.appendChild(price);
    });
});

request.addEventListener("error", handleErr);

function handleErr(){
    //err message
    const err = document.createElement('span');
    err.textContent = 'Not Found!'
    err.className = 'err';
    container.appendChild(err);
}