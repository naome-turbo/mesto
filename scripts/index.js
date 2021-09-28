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

let editName = document.querySelector('#popup__input_name');
let editDescription = document.querySelector('#popup__input_description');
let formElement = document.querySelector('.popup__content');
let btn;

function openEdit() {
  if (btn === 'add') {
    formName.textContent = "Новое место";
    editName.value = "";
    editDescription.value = "";
    document.querySelector('.popup__button-save').innerHTML = 'Создать';
  } else {
    formName.textContent = "Редактировать профиль";
    editName.value = profName.textContent;
    editDescription.value = profDescription.textContent;
    document.querySelector('.popup__button-save').innerHTML = 'Сохранить';
  }
  popUp.classList.add('popup_visibility');
}

function closeEdit() {
  popUp.classList.remove('popup_visibility');
}

function editInfo() {
  if (btn === 'add') {
    cardImg = cardsTemplate.querySelector('.cards-grid__list-item').cloneNode(true);
    cardImg.querySelector('.cards-grid__item').src = editDescription.value;
    cardImg.querySelector('.grid-menu__name').textContent = editName.value;
    cards.prepend(cardImg);
    like();
  } else {
    profName.textContent = editName.value;
    profDescription.textContent = editDescription.value;
  }
}

function like() {
  cardImg.querySelector('.grid-menu__like').addEventListener('click', function(e) {
    e.target.classList.toggle('grid-menu__like_aktive');
  });
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
