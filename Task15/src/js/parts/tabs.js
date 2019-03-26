export function tabs() {
        
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