const popUp = document.querySelector('.popup');
const info = document.querySelector('.profile__info');
const openEditBtn = document.getElementById('profile_edit_btn');
const closeEditBtn = document.querySelector('.popup__button-exit');
const infoName = info.querySelector('.profile__name');
const infoDescription = info.querySelector('.profile__description');
const editName = document.querySelector('#popup__input_name');
const editDescription = document.querySelector('#popup__input_description');
let formElement = document.querySelector('.popup__content');

function openEdit() {
  popUp.classList.add('popup_visibility');
  editName.value = infoName.textContent;
  editDescription.value = infoDescription.textContent;
}

function closeEdit() {
  popUp.classList.remove('popup_visibility');
}

function editInfo() {
  infoName.textContent = editName.value;
  infoDescription.textContent = editDescription.value;
}

function saveEdit(e) {
  e.preventDefault();
  editInfo();
  closeEdit();
}

openEditBtn.addEventListener('click', openEdit);

closeEditBtn.addEventListener('click', closeEdit);

formElement.addEventListener('submit', saveEdit);
