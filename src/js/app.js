'use strict';

import productCard from '../templates/product-card.hbs';
import products from './menu.json';

const productList = document.querySelector('.js-menu');
const bodyEl = document.getElementById('body');
const checkBoxToggle = document.getElementById("theme-switch-toggle");
const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme', };

const theme = localStorage.getItem('theme') || Theme.LIGHT;
bodyEl.classList.add(theme);
checkBoxToggle.checked = theme === Theme.DARK;


const productMarkup = createProductCardMarkup(products);

function createProductCardMarkup(products) {
  return products.map(productCard).join('');
};

productList.insertAdjacentHTML("beforeend", productMarkup);

function changeTheme() {
  const a = Theme.DARK;
  const b = Theme.LIGHT;
  if (checkBoxToggle.checked) {
      themeToggle(a, b)
    } else {
      themeToggle(b, a)
    };
};

function themeToggle(a, b) {
    bodyEl.classList.add(a);
    bodyEl.classList.remove(b);
    localStorage.setItem('theme', a);
};

checkBoxToggle.addEventListener('change', changeTheme)

