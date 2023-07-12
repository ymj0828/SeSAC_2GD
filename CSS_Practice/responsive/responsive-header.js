const btn = document.querySelector('.fa-bars');
const small_menu = document.querySelector('.small-menu');

btn.addEventListener('click', ()=>{
  small_menu.classList.toggle('on');
});
