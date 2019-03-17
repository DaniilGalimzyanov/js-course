window.addEventListener('DOMContentLoaded', function() {

    function tabs() {
        let tab = document.querySelectorAll('.info-header-tab'),
            info = document.querySelector('.info-header'),
            tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContnent(a) {
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContnent(1);

        function showTabContent(i) {
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
        }

        info.addEventListener('click', function(event){
            let target = event.target;
            for (let i = 0; i < tab.length; i++) {
                if (tab[i] == target) {
                    hideTabContnent(0);
                    showTabContent(i);
                    break;
                }
            }
        });
    }

    function timer(endtime, hoursBlockName, minutesBlockName, secondsBlockName) {

        let timerID = setInterval(applyTime, 500);

        function getTime(endtime) {
            let dif = Date.parse(endtime) - Date.parse(new Date()),
                seconds = `${Math.floor(Math.floor(dif / 1000 % 60) / 10)}${Math.floor(dif / 1000 % 60) % 10}`,
                minutes = `${Math.floor(Math.floor(dif / 1000 / 60 % 60) / 10)}${Math.floor(dif / 1000 / 60 % 60) % 10}`,
                hours = `${Math.floor(Math.floor(dif / 1000 / 60 / 60) / 10)}${Math.floor(Math.floor(dif / 1000 / 60 / 60) % 10)}`;
            if (dif <= 0) {
                clearInterval(timerID);
                return {
                    seconds: 0,
                    minutes: 0,
                    hours: 0
                }
            } else {
                return {
                    seconds: seconds,
                    minutes: minutes,
                    hours: hours
                }
            }
        }

        function applyTime() {
            let hoursBlock = document.querySelector(hoursBlockName),
                minutesBlock = document.querySelector(minutesBlockName),
                secondsBlock = document.querySelector(secondsBlockName),
                realTime = getTime(endtime);
            hoursBlock.textContent = realTime.hours;
            minutesBlock.textContent = realTime.minutes;
            secondsBlock.textContent = realTime.seconds;
        }
    }

    function anchorLink() {
        let links = document.querySelectorAll('.link'),
            nav = document.querySelector('nav');
        nav.addEventListener('click', function(event){
            for(let i = 0; i < links.length; i++){
                if(event.target == links[i]) {
                    event.preventDefault();
                    scrollToBlock(links[i].getAttribute('href'));
                    break;
                }
            }
        });

        function scrollToBlock(id) {
            let anchor = document.querySelector(id),
                lenToBlock = anchor.getBoundingClientRect().top - nav.getBoundingClientRect().top - nav.clientHeight,
                pos = 0;
                scroll(lenToBlock, 1);

            function scroll(lenToBlock, speed) {
                let timerId = setInterval(function(){
                    if(pos != lenToBlock) {
                        if (lenToBlock < 0) {
                            pos--;
                            scrollBy(0, -1);
                        } else {
                            pos++;
                            scrollBy(0, 1);
                        }
                    } else {
                        clearInterval(timerId);
                    }
                }, speed);
                // if (pos != lenToBlock) {
                //     if (lenToBlock < 0) {
                //         pos--;
                //     } else {
                //         pos++;
                //     }
                //     window.scrollBy(0, pos);
                //     console.log(pos);
                //     setTimeout(scroll(lenToBlock), 10);
                // } else {
                //     clearInterval(1);
                // }
            }

        }
    }

    function popupWindow() {

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
            let length = 0,
                op = 1;
            overlay.classList.remove('fade');
            overlay.style.display = 'block';
            popup.style.top = 0  + 'px';
            popup.style.opacity = op;
            document.body.style.overflow = 'hidden';

            let timerAnim = setInterval(frame, 5);
            function frame() {
                if (length < 300) {
                    length++;
                    console.log(length);
                    popup.style.top = length + 'px';
                } else {
                    clearInterval(timerAnim);
                }

            }

        }
        
    }

    anchorLink();
    tabs();
    timer('2019-04-15', '.hours', '.minutes', '.seconds');
    popupWindow();
    
});