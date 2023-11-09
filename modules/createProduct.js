import { products, cartProducts } from './data.js';

export default function createProduct (productParams) {
    const product = document.createElement('li');
    const productAdd = document.createElement('button');
    const productName = document.createElement('div');
    const productPrice = document.createElement('div');
    const productCount = document.createElement('input');
    const productIsNotAvaliable = document.createElement('div');

    productIsNotAvaliable.innerText = 'Товар не доступен';

    // Название товара
    productName.innerText = productParams.name;
    
    // Цена товара
    productPrice.innerText = productParams.price;

    // кнопка корзины
    productAdd.innerText = 'Добавить в корзину';

    // Счётчик
    productCount.setAttribute('type', 'number');
    productCount.setAttribute('min', productParams.min);
    productCount.setAttribute('max', productParams.max);
    productCount.value = productParams.min;

    product.append(productName);
    product.append(productPrice);

    if (!productParams.isAvaliable) {
        product.append(productIsNotAvaliable);
    }

    if (productParams.isAvaliable) {
        product.append(productCount);
        product.append(productAdd);

        productAdd.addEventListener('click', function () {
            const cartProduct = {
                ...productParams,
                count: parseInt(productCount.value),
                checked: true
            }
    
            cartProducts.push(cartProduct);
    
            renderCart();
            renderCounters();
        });
    }

    return product;
}
