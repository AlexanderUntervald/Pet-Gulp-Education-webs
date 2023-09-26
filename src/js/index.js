import mobileNav from './modules/mobile-nav.js';
mobileNav();

 

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});
 

const swiperEl2 = document.querySelector('.mySwiper2')
Object.assign(swiperEl2, {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.programming__button-next',
    prevEl: '.programming__button-prev',
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 20,
    }, 
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    }, 
  },
});
swiperEl2.initialize();