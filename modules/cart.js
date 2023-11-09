import { cartProducts, cartProductsActiveEl, cartProductsNotActiveEl } from './data.js';

export function createCartProduct (productParams) {
    const product = document.createElement('li');
    const productDelete = document.createElement('button');
    const productName = document.createElement('div');
    const productPrice = document.createElement('div');
    const productCount = document.createElement('input');
    const productActive = document.createElement('input');

    productActive.setAttribute('type', 'checkbox');
    productActive.checked = productParams.checked;

    productCount.setAttribute('type', 'number');
    productCount.setAttribute('max', productParams.max);
    productCount.value = productParams.count;

    productDelete.innerText = 'X';
    productName.innerText = `Название: ${productParams.name}`;
    productPrice.innerText = `Цена: ${productParams.price}`;

    productActive.addEventListener('change', function () {
        productParams.checked = productActive.checked;

        renderCounters();
        renderCart();
    });

    function deleteProduct () {
        const newCartProducts = cartProducts.filter(function (product) {
            return product.id !== productParams.id;
        });

        cartProducts = newCartProducts;

        renderCart();
        renderCounters();
    }

    productCount.addEventListener('input', function () {
        const countValue = parseInt(this.value);

        const currentProduct = cartProducts.find(function (product) {
            return product.id === productParams.id;
        });

        currentProduct.count = countValue;

        if (countValue === 0) {
            deleteProduct();
        }

        if (countValue >= productParams.min) {
            renderCounters();
        }
    });

    productDelete.addEventListener('click', function () {
        deleteProduct();
    });

    product.append(productActive);
    product.append(productName);
    product.append(productPrice);
    product.append(productCount);
    product.append(productDelete);

    return product;
}


export function renderCart () {
    const activeProducts = cartProducts.filter(function (product) {
        return product.checked;
    });

    const notActiveProducts = cartProducts.filter(function (product) {
        return !product.checked;
    });

    cartProductsActiveEl.innerHTML = '';
    cartProductsNotActiveEl.innerHTML = '';

    activeProducts.forEach(function (product) {
        const productEl = createCartProduct(product);

        cartProductsActiveEl.append(productEl);
    });

    notActiveProducts.forEach(function (product) {
        const productEl = createCartProduct(product);

        cartProductsNotActiveEl.append(productEl);
    });
}
