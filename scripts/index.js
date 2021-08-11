const popUp = document.querySelector('.popup');
const info = document.querySelector('.info');
const openEditBtn = document.getElementById('open_edit_btn');
const closeEditBtn = document.querySelector('.popup__button-exit');
const infoName = info.querySelector('.info__name');
const infoDescription = info.querySelector('.info__description');
const editName = document.querySelector('#popup__input_name');
const editDescription = document.querySelector('#popup__input_description');
let formElement = document.querySelector('.popup__content');

function openEdit() {
  popUp.classList.add('popup__visibility');
  editName.value = infoName.textContent;
  editDescription.value = infoDescription.textContent;
  // popUp.style.visibility = "visible";
}

function closeEdit() {
  popUp.classList.remove('popup__visibility');
  // popUp.style.visibility = "hidden";
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
