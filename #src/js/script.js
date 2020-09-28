const infoBtn = document.querySelector('.info__learn');
const modalInfo = document.querySelector('.modal-info');
const modalInfoClose = document.querySelector('.modal-info__close');

infoBtn.addEventListener('click', () => {
  modalInfo.classList.add('active');
});

modalInfoClose.addEventListener('click', () => {
  modalInfo.classList.remove('active');
});




@@include('animOnScroll.js')
@@include('webpSupport.js')