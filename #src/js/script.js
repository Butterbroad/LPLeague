'use strict'
const infoBtn = document.querySelector('.info__learn');
const modalInfo = document.querySelector('.modal-info');
const modalInfoClose = document.querySelector('.modal-info__close');
const footer = document.querySelector('.footer');

infoBtn.addEventListener('click', () => {
  modalInfo.classList.add('active');

  (window.innerWidth < 768) ? footer.style.display = 'none' : null;
});

modalInfoClose.addEventListener('click', () => {
  modalInfo.classList.remove('active');
  (window.innerWidth < 768) ? footer.style.display = 'block' : null;
});




@@include('animOnScroll.js')
@@include('webpSupport.js')