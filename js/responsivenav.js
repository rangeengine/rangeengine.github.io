var toggleButton = document.getElementsByClassName('togglebutton')[0];
var navbarLinks = document.getElementsByClassName('headerlinks')[0];
var toggleButtoon = document.getElementsByClassName('header')[0];

toggleButton.addEventListener('click', function() {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
  $('.header').addClass('activeh');
});