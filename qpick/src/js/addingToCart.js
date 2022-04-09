import { products } from './products.js';
import displayAmountProducts from './displayAmountProducts.js';

export default function addingToCart() {

  const buttonsAddingToCart = document.querySelectorAll('.product__button');
  let cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  if(cartParseJSON === null) {
    cartParseJSON = [];
  }
  buttonsAddingToCart.forEach( btn => {
    btn.addEventListener('click', addToCart)
  })

  function addToCart(event) {
    const id = event.target.dataset.id;
    products.map( section => {
      section.value.map( elem => {
        let availabilityCheck = false;
        cartParseJSON.forEach(product => {
          if(product.id === elem.id) {
            availabilityCheck = true;
          }
        })
        if(elem.id === id && !availabilityCheck) {
          cartParseJSON.push(elem);
        }
      })
    })
    sessionStorage.setItem('cart', JSON.stringify(cartParseJSON));
    displayAmountProducts();
  }
}