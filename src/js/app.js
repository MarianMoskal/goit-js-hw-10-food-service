'use strict';

import productCard from '../templates/product-card.hbs';
import products from './menu.json';

const productList = document.querySelector('.js-menu');
const bodyEl = document.getElementById('body');
const checkBoxToggle = document.getElementById("theme-switch-toggle");
const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme', };

const theme = localStorage.getItem('theme');

bodyEl.setAttribute('class', theme);
  if (theme === Theme.DARK) {
    checkBoxToggle.setAttribute('checked', true);
  };

const productMarkup = createProductCardMarkup(products);

function createProductCardMarkup(products) {
  return products.map(productCard).join('');
};

productList.insertAdjacentHTML("beforeend", productMarkup);

function changeTheme() {
  if (checkBoxToggle.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    } else {
      bodyEl.classList.add(Theme.LIGHT);
      bodyEl.classList.remove(Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT);
    };
};

checkBoxToggle.addEventListener('change', changeTheme)
