export default function displayAmountCart() {

  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const cardCounters = document.querySelectorAll('.card__counter');

  cardCounters.forEach( cardCounter => {
    cartParseJSON.forEach( counter => {
      if(counter.id === cardCounter.dataset.id) {
        cardCounter.innerHTML = counter.amount;
      }
    })
  });

}