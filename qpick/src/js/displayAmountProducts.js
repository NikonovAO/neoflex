import { cart } from "./addingToCart.js";

export default function displayAmountProducts() {
  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const amountProducts = cartParseJSON.reduce( (prev, current) => {
    return prev + current.amount;
  }, 0);

  const cartCounter = document.querySelector('.cart-counter');
  cartCounter.innerHTML = amountProducts;
}