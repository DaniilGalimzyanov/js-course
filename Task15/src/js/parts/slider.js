export function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides();

    function showSlides() {
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    prev.addEventListener('click', function(){
        slideIndex--;
        showSlides();
    });

    next.addEventListener('click', function(){
        slideIndex++;
        showSlides();
    });

    dotsWrap.addEventListener('click', function(){
        console.log(event.target);
        for (let i = 0; i < dots.length; i++) {
            if (dots[i] == event.target) {
                slideIndex = i + 1;
                showSlides();
                break;
            }
        }
    });

}