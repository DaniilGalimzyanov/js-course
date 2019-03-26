export function popupWindow() {

    const popupClose = document.querySelector('.popup-close'),
          btns = document.querySelectorAll('.description-btn'),
          browser = navigator.userAgent,
          btn = document.querySelector('.more');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        btn.addEventListener('click', openPhone);
        btns.forEach(function(item) {
            item.addEventListener('click', openPhone);
        });
    } else if ((browser.indexOf('Edge') + 1) || (browser.indexOf('Explorer') + 1)) {
        btn.addEventListener('click', openPopupCss);
        btns.forEach(function(item) {
            item.addEventListener('click', openPopupCss);
        });
    } else {
        btn.addEventListener('click', openPopupJs);
        btns.forEach(function(item) {
            item.addEventListener('click', openPopupJs);
        });
    }

    popupClose.addEventListener('click', closePopup);
    
    function openPhone() {

        const overlay = document.querySelector('.overlay'),
              popup = document.querySelector('.popup');

        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function openPopupCss() {

        const overlay = document.querySelector('.overlay'),
              popup = document.querySelector('.popup');

        document.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
        popup.classList.add('rotate');
        
    }

    
    function closePopup() {

        const overlay = document.querySelector('.overlay'),
              popup = document.querySelector('.popup');
        
        overlay.style.display = 'none';
        popup.classList.remove('rotate');
        document.body.style.overflow = '';

    }


    function openPopupJs() {

        const overlay = document.querySelector('.overlay'),
              popup = document.querySelector('.popup');
        let length = 0;

        overlay.classList.remove('fade');
        overlay.style.display = 'block';
        popup.style.top = `${0}px`;
        popup.style.opacity = 1;
        document.body.style.overflow = 'hidden';

        let timerAnim = setInterval(frame, 5);
        function frame() {
            if (length < 300) {
                length++;
                console.log(length);
                popup.style.top = `${length}px`;
            } else {
                clearInterval(timerAnim);
            }

        }

    }
    
}