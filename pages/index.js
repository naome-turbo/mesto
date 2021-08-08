const edit = document.querySelector('.edit');
const info = document.querySelector('.info');
const openEditBtn = document.getElementById('open_edit_btn');
const closeEditBtn = document.querySelector('.edit__button-exit');
const editOverlay = document.querySelector('.edit__overlay');
const saveEditBtn = document.querySelector('.edit__button-save');
const infoName = info.querySelector('.info__name');
const infoDescription = info.querySelector('.info__description');
const editName = document.querySelector('.edit__name');
const editDescription = document.querySelector('.edit__description');

function openEdit() {
  edit.classList.add('edit_visibility');
}

function closeEdit() {
  edit.classList.remove('edit_visibility');
}

function saveEdit() {
  edit.classList.remove('edit_visibility');
}

openEditBtn.addEventListener('click', function(event) {
  editName.value = infoName.textContent;
  editDescription.value = infoDescription.textContent;
  openEdit();
})

closeEditBtn.addEventListener('click', function() {
  closeEdit();
})

editOverlay.addEventListener('click', function() {
  closeEdit();
})

saveEditBtn.addEventListener('click', function() {
  infoName.textContent = editName.value;
  infoDescription.textContent = editDescription.value;
  saveEdit();
})
