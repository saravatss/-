import { cartProducts, totalPriceEl, totalCountEl } from './data.js';

export function renderCounters () {
    let totalPrice = 0;
    let totalCount = 0;

    cartProducts
        .filter(function (product) {
            return product.checked;
        })
        .forEach(function (product) {
            totalPrice += product.price * product.count;
            totalCount += product.count;
        });

    totalPriceEl.innerText = totalPrice;
    totalCountEl.innerText = totalCount;
}
