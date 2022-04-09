
export default function calcTotalSum() {

  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));
  const totalSumElement = document.querySelector('.total__value')
  if(cartParseJSON !== null) {
    const total = cartParseJSON.reduce( (prev, current) => {
      return prev + current.amount * current.price;
    }, 0);
  
    totalSumElement.innerHTML = `&#x20bd; ${total}`;
  } else {
    totalSumElement.innerHTML = `&#x20bd; 0`;
  }
  
}