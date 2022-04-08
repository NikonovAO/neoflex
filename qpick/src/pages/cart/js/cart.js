//import runSessionStorage from '../../../js/sessionStorage.js';
import createCartContent from './createCartContent.js';
import calcTotalSum from './calcTotalSum.js';
import changeAmount from './changeAmount.js';
import displayAmountProducts from '../../../js/displayAmountProducts.js';

function app() {

  //runSessionStorage();
  
  createCartContent();

  displayAmountProducts();

  calcTotalSum();

  changeAmount();
}

app();