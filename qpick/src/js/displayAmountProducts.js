import { cart } from "./addingToCart.js";

export default function displayAmountProducts() {
  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const cartCounter = document.querySelector('.cart-counter');
  cartCounter.innerHTML = cartParseJSON.length;
}