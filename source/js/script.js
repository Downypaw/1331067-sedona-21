var navMain = document.querySelector('.main-nav');
  var pageToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('main-nav--nojs');

  pageToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
    } else {
      navMain.classList.add('main-nav--closed');
    }
  });
