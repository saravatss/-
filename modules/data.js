const products = [
    {
        id: '100500',
        name: 'Не активный товар',
        price: 0,
        max: 0,
        min: 0,
        isAvaliable: false
    },
    {
        id: '1',
        name: 'Товар 1',
        price: 100,
        max: 10,
        min: 2,
        isAvaliable: true
    },
    {
        id: '2',
        name: 'Товар 2',
        price: 200,
        max: 10,
        min: 5,
        isAvaliable: true
    },
    {
        id: '3',
        name: 'Товар 3',
        price: 300,
        max: 10,
        min: 1,
        isAvaliable: true
    },
    {
        id: '4',
        name: 'Товар 4',
        price: 400,
        max: 10,
        min: 1,
        isAvaliable: true
    },
    {
        id: '5',
        name: 'Товар 5',
        price: 500,
        max: 10,
        min: 1,
        isAvaliable: false
    }
];

let cartProducts = [];

const totalPriceEl = document.querySelector('#total-price');
const totalCountEl = document.querySelector('#total-count');
const productsEl = document.querySelector('#products');
const cartProductsActiveEl = document.querySelector('#cart-products-active');
const cartProductsNotActiveEl = document.querySelector('#cart-products-not-active');

export { products, cartProducts, totalPriceEl, totalCountEl, productsEl, cartProductsActiveEl, cartProductsNotActiveEl };