import { products } from './products.js';
import dispayAmountProducts from './displayAmountProducts.js';

const cart = [];

export default function addingToCart() {

  const buttonsAddingToCart = document.querySelectorAll('.product__button');

  buttonsAddingToCart.forEach( btn => {
    btn.addEventListener('click', addToCart)
  })

  function addToCart(event) {
    const id = event.target.dataset.id
    products.map( section => {
      section.value.map( elem => {
        if(elem.id === id && !cart.includes(elem)) {
          cart.push(elem);
          cart[cart.length-1].amount = 1;
        }
      })
    })
    dispayAmountProducts();
  }
}

export { cart }