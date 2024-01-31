const container = document.querySelector('.container');

async function fetchProducts(){
  
  try { 
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const {products} = await data;

    products.map((product) => {
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

  } catch(err) {
     // err message
      err = document.createElement('span');
      err.textContent = 'Not Found!'
      err.className = 'err';
      container.appendChild(err);
  }
}

fetchProducts();
