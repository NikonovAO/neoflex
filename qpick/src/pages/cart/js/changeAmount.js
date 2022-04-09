import calcTotalSum from './calcTotalSum.js';
import displayAmountCart from './displayAmountCart.js';
import displayCardTotal from './displayCardTotal.js';

export default function changeAmount() {

  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const decrementButtons = document.querySelectorAll('.card__decrement');

  decrementButtons.forEach(btn => {
    btn.addEventListener('click', decrementAmount, {useCapture : false})
  })

  function decrementAmount(event) {
    const id = event.target.dataset.id;

    const cart = cartParseJSON.map(product => {
      if (product.id === id) {
        product.amount--;
        if (product.amount < 0) {
          product.amount = 0;
        }
      }
      return product
    })

    sessionStorage.setItem('cart', JSON.stringify(cart));
    calcTotalSum();
    displayAmountCart();
    displayCardTotal();
  }

  const incrementButtons = document.querySelectorAll('.card__increment');

  incrementButtons.forEach(btn => {
    btn.addEventListener('click', incrementAmount)
  })

  function incrementAmount(event) {
    const id = event.target.dataset.id;
    
    const cart = cartParseJSON.map(product => {
      if (product.id === id) {
        product.amount++;
      }
      return product
    })

    sessionStorage.setItem('cart', JSON.stringify(cart));
    calcTotalSum();
    displayAmountCart();
    displayCardTotal();
  }
}