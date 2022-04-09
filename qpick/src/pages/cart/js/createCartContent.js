import deleteCart from './deleteCart.js';

export default function createCartContent() {

  const cartParseJSON = JSON.parse(sessionStorage.getItem('cart'));

  const wrapper = document.querySelector('.main__wrapper');

  const sectionName = document.createElement('h2');
  sectionName.classList.add('cart__title');
  sectionName.innerHTML = 'Корзина';
  wrapper.append(sectionName);

  const cartContainer = document.createElement('div');
  cartContainer.classList.add('cart__container');
  wrapper.append(cartContainer);

  const cartList = document.createElement('ul');
  cartList.classList.add('cart__list');
  cartContainer.append(cartList);

  if (cartParseJSON !== null) {
    cartParseJSON.map((product) => {
      const cartCard = document.createElement('li');
      cartCard.classList.add('cart__card');
      cartList.append(cartCard);

      const cardProduct = document.createElement('div');
      cardProduct.classList.add('card__product');
      cartCard.append(cardProduct);

      const cardImageWrapper = document.createElement('div');
      cardImageWrapper.classList.add('card__img-wrapper');
      cardProduct.append(cardImageWrapper);

      const cardImage = document.createElement('img');
      cardImage.classList.add('card__img');
      cardImage.src = `../../.${product.img}`;
      cardImage.alt = product.title;
      cardImageWrapper.append(cardImage);

      const cardDescription = document.createElement('div');
      cardDescription.classList.add('card__description');
      cardProduct.append(cardDescription);

      const cardName = document.createElement('h3');
      cardName.classList.add('card__name');
      cardName.innerHTML = product.title;
      cardDescription.append(cardName);

      const cardPrice = document.createElement('span');
      cardPrice.classList.add('product__price');
      cardPrice.innerHTML = `${product.price} &#x20bd;`;
      cardDescription.append(cardPrice);

      const cardButtons = document.createElement('div');
      cardButtons.classList.add('card__buttons');
      cartCard.append(cardButtons);

      const cardDecrement = document.createElement('button');
      cardDecrement.classList.add('card__decrement');
      cardDecrement.innerHTML = `&#8211;`;
      cardDecrement.type = 'button';
      cardDecrement.dataset.id = product.id;
      cardButtons.append(cardDecrement);

      const cardCounter = document.createElement('div');
      cardCounter.classList.add('card__counter');
      cardCounter.innerHTML = product.amount;
      cardCounter.dataset.id = product.id;
      cardButtons.append(cardCounter);

      const cardIncrement = document.createElement('button');
      cardIncrement.classList.add('card__increment');
      cardIncrement.innerHTML = `<span class="icon-increment"></span>`;
      cardIncrement.innerHTML = `+`;
      cardIncrement.type = 'button';
      cardIncrement.dataset.id = product.id;
      cardButtons.append(cardIncrement);

      const cardDelete = document.createElement('button');
      cardDelete.classList.add('card__delete');
      cardDelete.innerHTML = `<span class="icon-delete" data-id='${product.id}'></span>`;
      cardDelete.type = 'button';
      cardDelete.dataset.id = product.id;
      cartCard.append(cardDelete);

      const cardTotal = document.createElement('div');
      cardTotal.classList.add('card__total');
      cardTotal.innerHTML = `${product.price} &#x20bd;`;
      cardTotal.dataset.id = product.id;
      cartCard.append(cardTotal);
    })
  }
  const issueBlock = document.createElement('div');
  issueBlock.classList.add('cart__issue');
  cartContainer.append(issueBlock);

  const total = document.createElement('div');
  total.classList.add('total');
  issueBlock.append(total);

  const totalHeader = document.createElement('span');
  totalHeader.classList.add('total__title');
  totalHeader.innerHTML = 'ИТОГО';
  total.append(totalHeader);

  const totalValue = document.createElement('span');
  totalValue.classList.add('total__value');
  totalValue.innerHTML = `0 &#x20bd;`;
  total.append(totalValue);

  const totalButton = document.createElement('button');
  totalButton.classList.add('total__issue');
  totalButton.innerHTML = 'Перейти к оформлению';
  totalButton.type = 'button';
  total.append(totalButton);

  deleteCart();
}