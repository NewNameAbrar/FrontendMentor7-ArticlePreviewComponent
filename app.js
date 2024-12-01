const share = document.querySelector('.shareBtn');
const modal = document.querySelector('.modal');
let click = 0;

const openModal = () => {
  modal.classList.add('modals');
  modal.innerHTML = `
  <p class="share">SHARE</p>

  <div class="logos">
    <div class="logo">
    <img src='/images/icon-facebook.svg'>
    </div>
    
    <div class="logo">
    <img src='/images/icon-twitter.svg'>
    </div>
    
    <div class="logo">
    <img src='/images/icon-pinterest.svg'>
    </div>
  </div>

  <div class="arrow"></div>
    `;
  click++;
};

const hideModal = () => {
  modal.classList.remove('modals');

  modal.innerHTML = '';
  click = 0;
};

share.addEventListener('mouseenter', () => {
  share.classList.add('change');
});
share.addEventListener('mouseleave', () => {
  share.classList.remove('change');
});

share.addEventListener('click', () => {
  !click ? openModal() : hideModal();
});
