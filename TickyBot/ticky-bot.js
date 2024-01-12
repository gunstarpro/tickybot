setTimeout(() => {
  document.querySelector('.home-page-title').style.opacity=1;
}, 500);
setTimeout(() => {
  document.querySelector('.home-page-description').style.opacity=1;
}, 1000);
setTimeout(() => {
  document.querySelector('.home-page-button').style.opacity=1;
}, 1500);
setTimeout(() => {
  document.querySelector('.bot-img').style.opacity=1;
}, 2000);
setTimeout(() => {
  document.querySelector('.about-title').style.opacity=1;
}, 1500);

const disappearingButton = document.querySelector('.top-button');
const scrollHeightToDisappear = 100;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY >= scrollHeightToDisappear) {
        disappearingButton.style.opacity = 1;
    } else {
        disappearingButton.style.opacity = 0;
    }
});
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function scroll1(section){
const element=document.querySelector(section);
element.scrollIntoView();
}
