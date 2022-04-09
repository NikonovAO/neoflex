export default function displayAmountProducts() {
  const cartCounter = document.querySelector('.cart-counter');
  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  if(cartParseJSON !== null) {
    cartCounter.innerHTML = cartParseJSON.length;
  } else {
    cartCounter.innerHTML = 0;
  }
  
}