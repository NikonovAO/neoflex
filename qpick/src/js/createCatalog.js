import { products } from './products.js';

export default function createCatalog() {

  const wrapper = document.querySelector('.main__wrapper');

  products.map( (section) => {

    const sectionProduct = document.createElement('section');
    sectionProduct.classList.add('product');
    wrapper.append(sectionProduct);

    const sectionName = document.createElement('h2');
    sectionName.classList.add('section__name');
    sectionName.innerHTML = section.name;
    sectionProduct.append(sectionName);

    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product__list');
    sectionProduct.append(productWrapper);

    section.value.map( (elem) => {
      console.log(elem);

      const productCard = document.createElement('div');
      productCard.classList.add('product__card');
      productWrapper.append(productCard);

      const productImageWrapper = document.createElement('div');
      productImageWrapper.classList.add('product__img-wrapper');
      productCard.append(productImageWrapper);

      const productImage = document.createElement('img');
      productImage.classList.add('product__img');
      productImage.src = elem.img;
      productImage.alt = elem.title;
      productImageWrapper.append(productImage);

      const productContent = document.createElement('div');
      productContent.classList.add('product__content');
      productCard.append(productContent);

      const productName = document.createElement('h3');
      productName.classList.add('product__name');
      productName.innerHTML = elem.title;
      productContent.append(productName);

      const productPrice = document.createElement('div');
      productPrice.classList.add('product__price');
      productPrice.innerHTML = `${elem.price} &#x20bd;`;
      productContent.append(productPrice);

      const productRate = document.createElement('div');
      productRate.classList.add('product__rate');
      productContent.append(productRate);

      const productRateIcon = document.createElement('span');
      productRateIcon.classList.add('icon-star');
      productRate.append(productRateIcon);

      const productRateValue = document.createElement('span');
      productRateValue.classList.add('product__rating');
      productRateValue.innerHTML = elem.rate;
      productRate.append(productRateValue);

      const productButton = document.createElement('button');
      productButton.classList.add('product__button');
      productButton.innerHTML = 'Купить';
      productButton.type = 'button';
      productContent.append(productButton);
    })
  })


}