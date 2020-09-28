const infoBtn = document.querySelector('.info__learn');
const modalInfo = document.querySelector('.modal-info');
const modalInfoClose = document.querySelector('.modal-info__close');

infoBtn.addEventListener('click', () => {
  modalInfo.classList.add('active');
});

modalInfoClose.addEventListener('click', () => {
  modalInfo.classList.remove('active');
});




'use strict';

const animItems = document.querySelectorAll('.anim-item');


if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains("anim-no-hide")) {
                    animItem.classList.remove('active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 700);
}

// function msieversion() {

//     var ua = window.navigator.userAgent;
//     var msie = ua.indexOf("MSIE ");

//     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
//     {
//       alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
//       alert('ie');
//     } else {
//       alert('ne ie');
//     }
//     return false;
//   }
//   msieversion();


function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});