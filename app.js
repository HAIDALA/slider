const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');

//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter

let counter = 1;

const size  = images[0].clientWidth;

slide.style.transform = 'translatex(' +(-size*counter) + 'px)'; 

//Button listeners

nextBtn.addEventListener('click',()=>{
    if(counter>= images.length -1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translatex(' +(-size*counter) + 'px)'; 

});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translatex(' +(-size*counter) + 'px)'; 
    
});

slide.addEventListener('transitionend', ()=>{
    if(images[counter].id == 'lastClone'){
        slide.style.transition = "non";
        counter = images.length - 2;
        slide.style.transform = 'translatex(' +(-size*counter) + 'px)'; 
    }
    if(images[counter].id == 'firstClone'){
        slide.style.transition = "non";
        counter = images.length - counter;
        slide.style.transform = 'translatex(' +(-size*counter) + 'px)'; 
    }
});

// Scroll down button

$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
    });
});






