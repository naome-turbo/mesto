const cardsTemplate = document.querySelector('#cards-grid__list-item').content;
const cards = document.querySelector('.cards-grid__list');
let cardImg;

const initialCards = [

  {
    name: 'Пляж',
    link: 'images/beach.jpg'
  },
  {
    name: 'Автомобиль',
    link: 'images/car.jpg'
  },
  {
    name: 'Иваново',
    link: 'images/forest.jpg'
  },
  {
    name: 'Хижина',
    link: 'images/house.jpg'
  },
  {
    name: 'Заросли',
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
  cards.append(cardImg);
  like();
});
