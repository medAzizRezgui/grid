const close_btn = document.getElementById('close-btn');
const open_btn = document.getElementById('open-btn');
const side_nav = document.getElementById('side-nav');
const modal = document.getElementById('modal');

const year = document.getElementById('year');
const month = document.getElementById('month');
const year_slide = document.querySelector('.year');
const month_slide = document.querySelector('.month');




close_btn.addEventListener('click',()=>{
    side_nav.classList.remove('show-side-nav');
    modal.classList.remove('show-bg');
    document.body.style.overflow = "auto"
})
open_btn.addEventListener('click',()=>{
    side_nav.classList.add('show-side-nav');
    modal.classList.add('show-bg');
    document.body.style.overflow = "hidden"
})


year.addEventListener('click',()=>{
year.classList.add('activate-text');
month.classList.add('disable-text');
year.classList.remove('disable-text');
month.classList.remove('activate-text');
year_slide.classList.remove('hide-bar');
year_slide.classList.add('show-bar');
month_slide.classList.add('hide-bar');
    month_slide.classList.remove('show-bar');

})

month.addEventListener('click',()=>{
    month.classList.add('activate-text');
    year.classList.add('disable-text');
    month.classList.remove('disable-text');
    year.classList.remove('activate-text');
    month_slide.classList.remove('hide-bar');
    month_slide.classList.add('show-bar');
    year_slide.classList.add('hide-bar');
    year_slide.classList.remove('show-bar');
    })