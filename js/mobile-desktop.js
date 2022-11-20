/*
Author: WikiOur
Author URI: https://wikiour.com.ua
Description: This script defines the device and adds technical classes
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

function mobileDesktop() {
  let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
  };

  let body = document.querySelector('body');
  if (isMobile.any()) {
    body.classList.add('touch');

  } else {
    body.classList.add('mouse');
  }
  
}

mobileDesktop();
