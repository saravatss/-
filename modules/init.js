import { products, productsEl } from './data.js';

export function init () {
    products.forEach(function (product) {
        const productEl = createProduct(product);

        productsEl.append(productEl);
    });
}
