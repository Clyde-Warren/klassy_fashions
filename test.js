const dropdownBtn = document.querySelector('.dropdown-nav-menu');
const mainOption = document.querySelector('.dropdown-nav');

dropdownBtn.addEventListener('click', ()=> mainOption.classList.toggle('active') );