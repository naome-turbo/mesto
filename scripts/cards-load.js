const userTemplate = document.querySelector('#loading').content;
const usersOnline = document.querySelector('.cards-grid__list');
let userElement;
// массив фотографий для загрузки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Кошка',
    link: 'https://images.unsplash.com/photo-1631833034795-01014ccd75da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Woman',
    link: 'https://images.unsplash.com/photo-1631831162589-3e1ff4d5a371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Азиатская девушка',
    link: 'https://img4.goodfon.ru/original/1440x900/f/c0/ai-nih-mark-prinz-kareglazaia-vostochnaia-gubki-lokony.jpg'
  }
];
initialCards.forEach(function (item) {
  // клонируем содержимое тега template
  userElement = userTemplate.querySelector('.cards-grid__list-item').cloneNode(true);

  // наполняем содержимым
  userElement.querySelector('.cards-grid__item').src = item.link;
  userElement.querySelector('.grid-menu__name').textContent = item.name;
  // userElement.querySelector('.cards-grid__basket').src = "./images/basket.svg";

  // отображаем на странице
  usersOnline.append(userElement);
});
