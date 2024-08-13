const rotateBtnRight = document.querySelector('.rotate-btn');
const rotateBtnLeft = document.querySelector('.rotate-btn-x');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtnRight.addEventListener('click', () => {
    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.classList.add('after-active');
        } 
        else{
            slide.classList.remove('after-active');
        }
    });

    slides[index].classList.remove('active');

    index++;

    if(index == totalSlides){
        index = 0;
    }

    slides[index].classList.add('active');

});

rotateBtnLeft.addEventListener('click', () => {
    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.classList.add('after-active');
        } 
        else{
            slide.classList.remove('after-active');
        }
    });

    slides[index].classList.remove('active');

    index--;

    if(index < 0){
        index = totalSlides - 1;
    }

    slides[index].classList.add('active');

});
