const popUp = document.querySelector('.popup');
const info = document.querySelector('.profile__info');
const openEditBtn = document.getElementById('profile_edit_btn');
const openAddBtn = document.getElementById('profile__add');
const closeEditBtn = document.querySelector('.popup__button-exit');

const formName = document.querySelector('.popup__title');
const profName = info.querySelector('.profile__name');
const cardName = info.querySelector('.grid-menu__name');
const profDescription = info.querySelector('.profile__description');
const cardDescription = info.querySelector('.cards-grid__item');

const crdsTemplate = document.querySelector('#cards-grid__list-item').content;
const crds = document.querySelector('.cards-grid__list');

let editName = document.querySelector('#popup__input_name');
let editDescription = document.querySelector('#popup__input_description');
let formElement = document.querySelector('.popup__content');
let btn;

function openEdit() {
  if (btn === 'add') {
    formName.textContent = "Новое место";
    editName.value = "Название";
    editDescription.value = "Ссылка на картинку";
  } else {
    formName.textContent = "Редактировать профиль";
    editName.value = profName.textContent;
    editDescription.value = profDescription.textContent;
  }

  popUp.classList.add('popup_visibility');
}

function closeEdit() {
  popUp.classList.remove('popup_visibility');
}

function editInfo() {
  if (btn === 'add') {
    const crdImg = cardsTemplate.querySelector('.cards-grid__list-item').cloneNode(true);
    crdImg.querySelector('.cards-grid__item').src = editDescription.value;
    crdImg.querySelector('.grid-menu__name').textContent = editName.value;
    crds.prepend(crdImg);
  } else {
    profName.textContent = editName.value;
    profDescription.textContent = editDescription.value;
  }
}

function saveEdit(e) {
  e.preventDefault();
  editInfo();
  closeEdit();
}

openEditBtn.addEventListener('click', function(){ openEdit(btn = 'ed'); });
openAddBtn.addEventListener('click', function(){ openEdit(btn = 'add'); });

closeEditBtn.addEventListener('click', closeEdit);

formElement.addEventListener('submit', saveEdit);
