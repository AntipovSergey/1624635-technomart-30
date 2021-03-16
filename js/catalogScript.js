//Modal catalog hide

let purchaseButton = document.querySelector('.purchase-button');
let modalCatalog = document.querySelector('.modal-catalog-hide');
let catalogHide = document.querySelector('.button-close-catalog')

purchaseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCatalog.classList.remove('modal-catalog-hide');
  modalCatalog.classList.add('modal-catalog-show');
});

catalogHide.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalCatalog.classList.remove('modal-form-show');
  modalCatalog.classList.add('modal-catalog-hide');
});