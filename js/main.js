//통합검색
const searchEl = document.querySelector('.search');
const searchInpEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInpEl.focus();
});

searchInpEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInpEl.setAttribute('placeholder', '통합검색');
});
searchInpEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInpEl.setAttribute('placeholder', '');
});


//뱃지, 탑버튼
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){// _.throttle(함수, 시간);

  if (window.scrollY > 500) {//숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    //top btn 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })

  } else {//보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    //top btn 숨김
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }

}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

//비주얼
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity:1
  })
});

//공지사항
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  // autoplay: true,
  // loop: true
});

//프로모션
new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true //사용자가 페이지 번호 요소를 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

//스타벅스 프로모션
const promotionEl = document.querySelector('.promotion');
const promotionTglBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionTglBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {//숨기기
    promotionEl.classList.add('hide');
  } else {//보이기
    promotionEl.classList.remove('hide');    
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
//유튜브
function floatingObject(selector, delay, size) {
  gsap.to(selector, 
    random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: delay
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', .5, 15);

//scroll spy
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
    triggerHook: .8, //뷰포트 기준 최상단은 0, 최하단이 1
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

//AWARDS
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5
});

//footer 연도
/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();