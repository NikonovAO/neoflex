import createCatalog from './createCatalog.js';
import addingToCart from './addingToCart.js';
import runSessionStorage from './sessionStorage.js';

function app() {

  runSessionStorage();

  createCatalog();

  addingToCart();

}

app();