let burger = document.querySelector('.burger__button');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__menu__list-item--link');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger__button--active');

        menu.classList.toggle('header__menu--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger__button--active');

        menu.classList.remove('header__menu--active');

        document.body.classList.remove('stop-scroll');
    })
})

let search = document.querySelector('.header__menu-button');
let searchLine = document.querySelector('.header-search__container');
let closeBtn = document.querySelector('.header-search__close');

search.addEventListener('click',

    function () {
        search.classList.toggle('header__menu-button--active');

        searchLine.classList.toggle('header-search__container--active');
    })

closeBtn.addEventListener('click',

    function () {
        search.classList.remove('header__menu-button--active');

        searchLine.classList.remove('header-search__container--active');
})

const swiper = new Swiper('.swiper', {

    // direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 2200,
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

let tabsbBtn = document.querySelectorAll('.how-work__steps-item__btn');
let tabsItem = document.querySelectorAll('.how-work__container');

tabsbBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsbBtn.forEach(function (btn) { btn.classList.remove('how-work__steps-item__btn--active') });
        e.currentTarget.classList.add('how-work__steps-item__btn--active');

        tabsItem.forEach(function (element) { element.classList.remove('how-work__container--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('how-work__container--active');

    })
})

$( "#accordion" ).accordion({
    icons:false,
    collapsible: true,
    heightStyle: "fill"
});

// $(".accordion").accordion({
//     icons: false
// });

// $( ".faq__list" ).accordion({
//     classes: {
//       "ui-accordion-header": "faq__list__item"
//     }
//   });


