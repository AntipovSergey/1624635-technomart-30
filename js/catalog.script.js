//Modal catalog hide

let purchaseButtons = document.querySelectorAll('.purchase-button');
let modalCatalog = document.querySelector('.modal-catalog-hide');
let catalogHide = document.querySelector('.button-close-catalog');

const openModal = (evt) => {
  evt.preventDefault();
  modalCatalog.classList.remove('modal-catalog-hide');
  modalCatalog.classList.add('modal-catalog-show');
}

for (let item of purchaseButtons) {
  item.addEventListener('click', openModal);
}

catalogHide.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalCatalog.classList.remove('modal-form-show');
  modalCatalog.classList.add('modal-catalog-hide');
});