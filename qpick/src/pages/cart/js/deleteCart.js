import createCartContent from './createCartContent.js';
import calcTotalSum from './calcTotalSum.js';
import displayAmountProducts from '../../../js/displayAmountProducts.js';

export default function deleteCart() {

  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const deleteButtons = document.querySelectorAll('.icon-delete');
  const wrapper = document.querySelector('.main__wrapper');

  deleteButtons.forEach(btn => {
    btn.addEventListener('click', deleteCard)
  })

  function deleteCard(event) {
    const id = event.target.dataset.id;
    console.log(event.target);
    for(let i = 0; i < cartParseJSON.length; i++) {
      if(cartParseJSON[i].id === id) {
        cartParseJSON.splice(i, 1)
      }
    }

    sessionStorage.setItem('cart', JSON.stringify(cartParseJSON));
    wrapper.innerHTML = '';
    createCartContent();
    calcTotalSum();
    displayAmountProducts();
  }

}