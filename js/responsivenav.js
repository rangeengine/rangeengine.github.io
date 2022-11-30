const toggleButton = document.getElementsByClassName('togglebutton')[0]
const navbarLinks = document.getElementsByClassName('headerlinks')[0]
const toggleButtoon = document.getElementsByClassName('header')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle('active')
  $('.header').addClass('activeh');
})