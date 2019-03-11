const answer = prompt('Введите текст'),
    prom = document.getElementById('prompt'),
    menuItems = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    adv = document.querySelector('.adv'),
    title = document.getElementById('title');

let t = menuItems[1];
menu.removeChild(menuItems[1]);
menu.insertBefore(t, menuItems[2]);

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.style.display = 'none';

prom.textContent = answer;