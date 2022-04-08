import { cart } from "./addingToCart.js";
import dispayAmountProducts from './displayAmountProducts.js';

export default function runSessionStorage() {

  window.addEventListener('beforeunload', () => {
    const cartJSON = JSON.stringify(cart);
    sessionStorage.setItem('cart', cartJSON);
  })

  window.addEventListener('load', () => {
    if (sessionStorage.getItem('cart') !== null) {
      const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
      cartParseJSON.forEach( element => {
        cart.push(element);
      });
      dispayAmountProducts();
    }
  })
}