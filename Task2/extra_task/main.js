let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    arr = [234, 745, 345, 453, 333, 737, 346],
    today = 0,
    weekBlock = document.querySelector('.week');


for (let i = 0; i != week.length; i++) {
    if (i == 6 || i == 5) {
        let dayOfWeek = document.createElement('div');
        dayOfWeek.innerHTML = `<strong>${week[i]}</strong>`;
        weekBlock.appendChild(dayOfWeek);
    } else if (i == today) {
        let dayOfWeek = document.createElement('div');
        dayOfWeek.innerHTML = `<i>${week[i]}</i>`;
        weekBlock.appendChild(dayOfWeek);
    } else {
        let dayOfWeek = document.createElement('div');
        dayOfWeek.innerHTML = `${week[i]}`;
        weekBlock.appendChild(dayOfWeek);
    }
}

for (let i = 0; i != arr.length; i++) {
    let num = String(arr[i]);
    if (num.slice(0, 1) == '3' || num.slice(0, 1) == '7') {
        console.log(num);
    }
}