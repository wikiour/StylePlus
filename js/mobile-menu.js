/*
Author: WikiOur
Author URI: https://wikiour.com.ua
Description: This script helps to implement a mobile menu
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

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
