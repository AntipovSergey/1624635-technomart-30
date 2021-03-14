let search_field = document.querySelector('.user-navigation-first-part-search-form');
let search_form_input = document.querySelector('.search-form-input');

search_form_input.addEventListener('focus', function() {
  search_field.classList.add('search-form-active');

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
  map_popup_show.classList.add('map-popup-show');
});

map_popup_hide.addEventListener('click', function(evt) {
  evt.preventDefault();
  map_popup_show.classList.remove('map-popup-show');
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

let products_item = document.querySelectorAll('.popular-products-list-item');
let hide = document.querySelector('.products-item-hide');



//Modal catalog

let