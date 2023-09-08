const hamburger = document.querySelector('.menu .hamburger');
const ul = document.querySelector('.menu ul');

hamburger.addEventListener('click', function () {
  ul.classList.toggle('active');
  hamburger.classList.toggle('switch');
});
