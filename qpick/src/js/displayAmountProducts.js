import { cart } from "./addingToCart.js";

export default function dispayAmountProducts() {

  const amountProducts = cart.reduce( (prev, current) => {
    return prev + current.amount;
  }, 0);

  const cartCounter = document.querySelector('.cart-counter');
  cartCounter.innerHTML = amountProducts;
}