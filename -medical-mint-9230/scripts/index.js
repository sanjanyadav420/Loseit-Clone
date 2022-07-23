$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      }
  }
})



// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });