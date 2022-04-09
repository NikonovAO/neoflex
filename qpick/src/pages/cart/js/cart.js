import createCartContent from './createCartContent.js';
import calcTotalSum from './calcTotalSum.js';
import changeAmount from './changeAmount.js';
import displayAmountProducts from '../../../js/displayAmountProducts.js';
import displayCardTotal from './displayCardTotal.js';

function app() {
 
  createCartContent();

  displayAmountProducts();

  displayCardTotal();

  calcTotalSum();

  changeAmount();

}

app();