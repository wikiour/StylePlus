function burger() {
  let menuBtn = document.querySelector('.burger');
  let menu = document.querySelector('.menu-mobile');
  let menuBody = document.querySelector('body');
  let menuBtnImgOpen = document.querySelector('.img-open-menu');
  let menuBtnImgCancel = document.querySelector('.img-close-menu');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    menuBody.classList.toggle('lock-menu');
    menuBtnImgOpen.classList.toggle('open');
    menuBtnImgCancel.classList.toggle('close');

  });
}

burger();
