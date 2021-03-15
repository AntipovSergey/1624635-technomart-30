
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
let map_popup_hide = document.querySelector('.button-close-map');

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

//Modal form

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

//Modal catalog hide

let purchaseButton = document.querySelector('.purchase-button');
let modalCatalog = document.querySelector('.modal-catalog-hide');

purchaseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCatalog.classList.remove('modal-catalog-hide');
  modalCatalog.classList.add('modal-catalog-show');
});