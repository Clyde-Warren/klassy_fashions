const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.nxt-btn')];
const prevBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener('click', ()=>{
    item.scrollLeft += containerWidth
  })

  prevBtn[i].addEventListener('click', ()=>{
    item.scrollLeft -= containerWidth;
  })

})


const dropdownBtns = document.getElementsByClassName('dropdown-nav-menu');
const mainOption = document.querySelectorAll('.dropdown-nav')


for(let i=0; i<dropdownBtns.length; i++){
  dropdownBtns[i].addEventListener('click', ()=> {mainOption[i].classList.toggle('active')});
}




// dropdownBtn.addEventListener('click', ()=> mainOption.classList.toggle('active'));
