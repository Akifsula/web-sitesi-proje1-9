const slider = document.querySelector('.memleketim-liste');
const sliderItems = document.querySelectorAll('.memleket-fotolar');
const arrowRight = document.querySelector('.arrow-right');
document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';


let activeIndex = 0;
let clickCount = 0;

arrowRight.addEventListener('click', () => {
  clickCount++;
  activeIndex++;
  if (activeIndex >= sliderItems.length) {
    activeIndex = 0;
  }
  slider.style.transition = 'transform 1.5s ease-in-out';
  slider.style.transform = `translateX(-${activeIndex * sliderItems[0].clientWidth}px)`;
  if (clickCount >= 5) {
    clickCount = 0;
    activeIndex = 0;
    slider.style.transition = 'transform 1.5s ease-in-out';
    slider.style.transform = `translateX(0)`;
  }
});

// API anahtarınızı buraya ekleyin
const apiKey = 'V6v6O8EN5NguWg5w2XvwnubMIg7JeS4ig1dVb9qC0pI';

// Kutuya tıklandığında fotoğrafı değiştiren işlev
function changeBackground(cardClass, query) {
  // Unsplash API'sine istek göndermek için URL oluşturun
  const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${apiKey}`;

  // AJAX isteği gönderin
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.urls.regular;

      // İlgili kutuya erişin ve arkaplan resmini değiştirin
      const card = document.querySelector(cardClass);
      card.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => {
      console.error('API isteği sırasında bir hata oluştu:', error);
    });
}

// Kutulara tıklama olayını dinleyin
const card1 = document.querySelector('.card1');
card1.addEventListener('click', () => {
  changeBackground('.card1', 'art');
});

const card2 = document.querySelector('.card2');
card2.addEventListener('click', () => {
  changeBackground('.card2', 'food');
});

const card3 = document.querySelector('.card3');
card3.addEventListener('click', () => {
  changeBackground('.card3', 'mythology');
});

// Örnek olarak card4'e de tıklama olayını dinleyin
const card4 = document.querySelector('.card4');
card4.addEventListener('click', () => {
  changeBackground('.card4', 'soccer');
});

/*
// API anahtarınızı buraya ekleyin
const apiKey = 'V6v6O8EN5NguWg5w2XvwnubMIg7JeS4ig1dVb9qC0pI';

// Kutuya tıklandığında fotoğrafı değiştiren işlev
function changeBackground() {
  // Unsplash API'sine istek göndermek için URL oluşturun
  const url = `https://api.unsplash.com/photos/random?query=soccer&client_id=${apiKey}`;

  // AJAX isteği gönderin 
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.urls.regular;

      // İlgili kutuya erişin ve arkaplan resmini değiştirin
      const card4 = document.querySelector('.card4');
      card4.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => {
      console.error('API isteği sırasında bir hata oluştu:', error);
    });
}

// Kutuya tıklama olayını dinleyin
const card4 = document.querySelector('.card4');
card4.addEventListener('click', changeBackground);

*/
