export default function displayCardTotal() {

  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const cardTotal = document.querySelectorAll('.card__total');

  cardTotal.forEach( card => {
    cartParseJSON.forEach( elem => {
      if(elem.id === card.dataset.id) {
        card.innerHTML = `${elem.amount * elem.price} &#x20bd;`;
      }
    })
  });
}