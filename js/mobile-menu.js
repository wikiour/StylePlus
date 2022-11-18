function burger() {
  let menuBtn = document.querySelector('.burger-open');
  let menu = document.querySelector('.menu-mobile');
  let menuBody = document.querySelector('body');
  let menuCancel = document.querySelector('.burger-cancel');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    menuBody.classList.toggle('lock-menu');
    menuCancel.classList.toggle('cancel');
  });
}

burger();
