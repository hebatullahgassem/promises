const container = document.querySelector(".container");
const apiUrl = "https://dummyjson.com/products";
const sort = document.getElementById('sort');

async function searchProducts(input) {
  try{
  const response = await fetch(apiUrl);
  const data = await response.json();
  const { products } = await data;

  const searchInput = input.value.toLowerCase();

  const result = products.filter((product) => {
    return product.title.toLowerCase().includes(searchInput);
  });

  sort.addEventListener('change', function(){
    const selectedValue = sort.value;
  
    if(selectedValue === 'asc'){
      result.sort((a, b) => a.price - b.price);
    } else if(selectedValue === 'desc'){
      result.sort((a, b) => b.price - a.price);
    }
  });

  result.map((product) => {
    //card
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";
    container.appendChild(cardContainer);

    //product title
    const title = document.createElement("h4");
    title.textContent = product.title;
    cardContainer.appendChild(title);

    //product descripsion
    const description = document.createElement("p");
    description.textContent = product.description;
    cardContainer.appendChild(description);

    //product image
    const image = document.createElement("img");
    image.src = product.images[0];
    image.className = "img";
    cardContainer.appendChild(image);

    //product price
    const price = document.createElement("h5");
    price.textContent = `${product.price} EGP`;
    cardContainer.appendChild(price);
  });

  } catch(err){
    // err message
    err = document.createElement("span");
    err.textContent = "Not Found!";
    err.className = "err";
    container.appendChild(err);
  }
}

const inputField = document.getElementById('searchInput');
inputField.addEventListener('input', function(){
  searchProducts(this);
});