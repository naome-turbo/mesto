const popUp = document.querySelector('.popup');
const info = document.querySelector('.info');
const openEditBtn = document.getElementById('open_edit_btn');
const closeEditBtn = document.querySelector('.popup__button-exit');
const infoName = info.querySelector('.info__name');
const infoDescription = info.querySelector('.info__description');
const editName = document.querySelector('.popup__input_name');
const editDescription = document.querySelector('.popup__input_description');

function openEdit() {
  editName.value = infoName.textContent;
  editDescription.value = infoDescription.textContent;
  popUp.classList.add('popup_visibility');
}

function closeEdit() {
  popUp.classList.remove('popup_visibility');
}

function editInfo() {
  infoName.textContent = editName.value;
  infoDescription.textContent = editDescription.value;
}

openEditBtn.addEventListener('click', openEdit);

closeEditBtn.addEventListener('click', closeEdit);

popUp.querySelector("#submit").onclick = function(evt){
  evt.preventDefault();
  editInfo();
  closeEdit();
  return false
}