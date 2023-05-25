const overlay = document.querySelector('.overlay');
const overlayBlur = document.querySelector('.overlay-blur');
const body = document.querySelector('body');

// Modal
const modalOpenBtn = document.querySelectorAll('[data-modal-form-open-btn]');
const modalCloseBtn = document.querySelectorAll('[data-modal-form-close-btn]');
const modalTabsBtn = document.querySelectorAll('[data-modal-form-tabs-btn]');
const modalTabsContent = document.querySelectorAll('[data-modal-form-tabs-content]');
const modal = document.querySelector('[data-modal-form]');

modalOpenBtn.forEach((item) => {
   item.addEventListener('click', function () {
      overlay.classList.add('active');
      modal.classList.add('active');
      body.classList.add('lock');
   });
});

modalCloseBtn.forEach((item) => {
   item.addEventListener('click', function () {
      overlay.classList.remove('active');
      modal.classList.remove('active');
      body.classList.remove('lock');
   });
});

modalTabsBtn.forEach((item, index) => {
   item.addEventListener('click', (e) => {
      modalTabsBtn.forEach((item) => {
         item.classList.remove('active');
      })
      item.classList.add('active');

      modalTabsContent.forEach((item) => {
         item.classList.remove('active');
      });
      modalTabsContent[index].classList.add('active');
   });
});


// Accordion
const accordionBtn = document.querySelectorAll('[data-filter-accordion-btn]');
const accordion = document.querySelectorAll('[data-filter-accordion]');

for (let i = 0; i <  accordionBtn.length; i++) {
   accordionBtn[i].addEventListener('click', function () {
      const clickedBtn = this.nextElementSibling.classList.contains('active');

      for (let i = 0; i < accordion.length; i++) {
         if (clickedBtn) break;
         if (accordion[i].classList.contains('active')) {
            accordion[i].classList.remove('active');
            accordionBtn[i].classList.remove('active');
         };
      };
      this.nextElementSibling.classList.toggle('active');
      this.classList.toggle('active');
   });
};


// Accordion Help
const accordionContent = document.querySelectorAll('.accordion__content');

accordionContent.forEach((item) => {
   let head = item.querySelector('.accordion__head');
   head.addEventListener('click', () => {
      item.classList.toggle('open');

      let accordionBox = item.querySelector('.accordion__box');
      if (item.classList.contains('open')) {
         accordionBox.style.height = `${accordionBox.scrollHeight}px`;
      } else {
         accordionBox.style.height = '0px';
      }
   });
});

// Dropdown
document.querySelector('.header__user').addEventListener('click', function() {
   document.querySelector('.header-dropdown').classList.toggle('show');
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileCloseBtn = document.querySelector('.mobile-menu__close-btn');

mobileMenuBtn.addEventListener('click', function () {
   mobileMenu.classList.add('active');
   overlayBlur.classList.add('active');
   body.classList.add('lock');
});

mobileCloseBtn.addEventListener('click', function () {
   mobileMenu.classList.remove('active');
   overlayBlur.classList.remove('active');
   body.classList.remove('lock');
});

// Language Dropdown
const langBtn =document.querySelector('.header__languages');

langBtn.addEventListener('click', function () {
   langBtn.classList.toggle('active');
});

// Filter
const filterOpenBtn = document.querySelector('.orders__btn-filter');
const filterContent = document.querySelector('.orders-filter');
const filterCloseBtn = document.querySelector('.orders-filter__close-btn');

filterOpenBtn.addEventListener('click', function () {
   filterContent.classList.add('active');
   overlayBlur.classList.add('active');
   body.classList.add('lock');
})

filterCloseBtn.addEventListener('click', function () {
   filterContent.classList.remove('active');
   overlayBlur.classList.remove('active');
   body.classList.remove('lock');
});





