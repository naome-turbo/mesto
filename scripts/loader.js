const cardsTemplate = document.querySelector('#cards-grid__list-item').content;
const cards = document.querySelector('.cards-grid__list');
let cardImg;

const initialCards = [
  {
    name: 'Море',
    link: 'images/sea.jpg'
  },
  {
    name: 'Лес',
    link: 'images/forest.jpg'
  },
  {
    name: 'Пляж',
    link: 'images/beach.jpg'
  },
  {
    name: 'Дом',
    link: 'images/house.jpg'
  },
  {
    name: 'Красивое растение',
    link: 'images/plant.jpg'
  },
  {
    name: 'Горы',
    link: 'images/mountain.jpg'
  }
];

initialCards.forEach(function (item) {
  cardImg = cardsTemplate.querySelector('.cards-grid__list-item').cloneNode(true);
  cardImg.querySelector('.cards-grid__item').src = item.link;
  cardImg.querySelector('.grid-menu__name').textContent = item.name;
  cardImg.querySelector('.cards-grid__item').alt = item.name;
  cards.append(cardImg);
  like();
  click();
});
