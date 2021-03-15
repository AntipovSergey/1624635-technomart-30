let search_field = document.querySelector('.user-navigation-first-part-search-form');
let search_form_input = document.querySelector('.search-form-input');
let loopRed = document.querySelector('.loop-red-hidden')

search_form_input.addEventListener('focus', function() {
  search_field.classList.add('search-form-active');
  loopRed.classList.remove('loop-red-hidden');
  loopRed.classList.add('loop-red-active');
  document.getElementById('search-form-text-field').placeholder='Перфоратор';

});

window.addEventListener('click', function (evt) {
    if (search_field.classList.contains('search-form-active')) {
    evt.preventDefault();
    search_field.classList.remove('search-form-active');
    loopRed.classList.remove('loop-red-active');
    loopRed.classList.add('loop-red-hidden');
    document.getElementById('search-form-text-field').placeholder='Поиск:';
    }
});

//Catalog alt
let catalog = document.querySelector('.catalog');
let title = document.querySelector('.features-title-special');
let subtitle = document.querySelector('.features-subtitle-special');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  catalog.classList.toggle('catalog');
  catalog.classList.toggle('catalog-alt');

  if (catalog.classList.contains('catalog')) {
    title.textContent='Перфоратор';
    subtitle.textContent = 'Настоящие мужские игрушки';
  } else {
    title.textContent='Дрели';
    subtitle.textContent = 'Соседям на радость!';
  }
});

prevButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  catalog.classList.toggle('catalog');
  catalog.classList.toggle('catalog-alt');

  if (catalog.classList.contains('catalog')) {
    title.textContent='Перфоратор';
    subtitle.textContent = 'Настоящие мужские игрушки';
  } else {
    title.textContent='Дрели';
    subtitle.textContent = 'Соседям на радость!';
  }
});


//Services

let services_list_button = document.querySelector('.services-list-button');
let services_show = document.querySelector('.services-list-info');

services_list_button.addEventListener('click', function(evt) {
  evt.preventDefault();
  services_show.classList.toggle('info-show');
  services_show.classList.toggle('info-hidden');
});

//Map popup

let map_popup = document.querySelector('.interactive-map');
let map_popup_show = document.querySelector('.map-popup');
let map_popup_hide = document.querySelector('.button-close');

map_popup.addEventListener('click', function(evt) {
  evt.preventDefault();
  map_popup_show.classList.remove('map-popup-hidden');
  map_popup_show.classList.add('map-popup-show');
});

map_popup_hide.addEventListener('click', function(evt) {
  evt.preventDefault();
  map_popup_show.classList.remove('map-popup-show');
  map_popup_show.classList.add('map-popup-hidden');
});

//Modal-form

let company_contacts_button = document.querySelector('.company-contacts-link');
let modal_form_show = document.querySelector('.modal-form-hide');
let modal_form_hide = document.querySelector('.button-close');

company_contacts_button.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_form_show.classList.remove('modal-form-hide');
  modal_form_show.classList.add('modal-form-show');
});

modal_form_hide.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal_form_show.classList.remove('modal-form-show');
  modal_form_show.classList.add('modal-form-hide');
});


//Hover on products

let productsListItems = document.querySelectorAll('.popular-products-list-item');
let productItem = document.querySelector('.products-item');

for (let i = 0; i < productsListItems.length; i++) {
  let productsListItem = productsListItems[i];
  productsListItem.addEventListener('mouseover', function(evt) {
    evt.preventDefault();
    productsListItem.classList.add('hover-shadow');
    productItem.classList.remove('products-item-hide');
    productItem.classList.add('products-item-show');
  });
}

for (let i = 0; i < productsListItems.length; i++) {
  let productsListItem = productsListItems[i];
  productsListItem.addEventListener('mouseout', function(evt) {
    evt.preventDefault();
    productsListItem.classList.remove('hover-shadow');
    productItem.classList.remove('products-item-show');
    productItem.classList.add('products-item-hide');
  });
}
