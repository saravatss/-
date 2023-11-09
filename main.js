import createProduct from './modules/createProduct.js';
createProduct(products);

import { createCartProduct, renderCart } from './modules/cart.js';
createCartProduct(products);
renderCart();

import { renderCounters } from './modules/renderCounters.js';
renderCounters();

import { init } from './modules/init.js';
init();
