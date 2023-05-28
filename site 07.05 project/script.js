let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 290;
    if (offset > 290) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 290;
    if (offset < 0) {
        offset = 290;
    }
    sliderLine.style.left = -offset + 'px';
});


let offset1 = 0;
const sliderLine1 = document.querySelector('.slider-line-2');

document.querySelector('.slider-next-1').addEventListener('click', function(){
    offset1 = offset1 + 270;
    if (offset1 > 570) {
        offset1 = 0;
    }
    sliderLine1.style.left = -offset1 + 'px';
});

document.querySelector('.slider-prev-2').addEventListener('click', function () {
    offset1 = offset1 - 270;
    if (offset1 < 0) {
        offset1 = 570;
    }
    sliderLine1.style.left = -offset1 + 'px';
});