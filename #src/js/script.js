'use strict'

const modalTrigger = document.querySelector('.info__learn');


modalTrigger.addEventListener('click', () => {
  const footer = document.querySelector('.footer');
  const modal = document.querySelector('.modal');
  modal.classList.add('active');
  footer.style.display = 'none';

  const modalClose = document.querySelector('.modal-info__close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    footer.style.display = 'block';
  });

});


//register links
const registerLinks = document.querySelectorAll('.get-link');

if (registerLinks.length > 0) {
  registerLinks.forEach(item => {
    item.setAttribute('href', item.getAttribute('href') + window.location.search);
  });
}


@@include('animOnScroll.js')
@@include('webpSupport.js')
