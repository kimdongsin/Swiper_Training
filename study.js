var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: { //반응형 조건 속성
    426: { //640 이상일 경우
      slidesPerView: 3, //레이아웃 2열
      spaceBetween: 30,
      slidesPerGroup: 3
    },
  },
  observer: true,
  observeParents: true,
  autoplay: false,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: { //반응형 조건 속성
    426: { //640 이상일 경우
      slidesPerView: 3, //레이아웃 2열
      spaceBetween: 30,
      slidesPerGroup: 3
    },

  },
  observer: true,
  observeParents: true,
  autoplay: false,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next2",
  }
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: { //반응형 조건 속성
    426: { //640 이상일 경우
      slidesPerView: 3, //레이아웃 2열
      spaceBetween: 30,
      slidesPerGroup: 3
    },

  },
  observer: true,
  observeParents: true,
  autoplay: false,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next3",
  }
});