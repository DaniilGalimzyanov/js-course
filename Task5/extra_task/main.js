let fullDate = new Date(),
    dateOne = document.createElement('input'),
    dateTwo = document.createElement('input'),
    result = document.createElement('input'),
    dayOfWeek = document.createElement('div'),
    dataArea = document.createElement('div'),
    btn = document.createElement('button'),
    daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let appData = {
    writeHours: fullDate.getHours(),
    writeMin: fullDate.getMinutes(),
    writeSeconds: fullDate.getSeconds(),
    writeYear: fullDate.getFullYear(),
    writeMonth: fullDate.getMonth(),
    writeDate: fullDate.getDate(),
    getAllDate: function() {
        let dataValue = '';
        for(key in appData) {
            if (key != 'getAllDate'){
                if (+appData[key] < 10){
                    dataValue += `0`;
                }
                if (key == 'writeYear') {
                    dataValue += `/ ${appData[key]} : `;
                } else if(key == 'writeSeconds' || key == 'writeDate'){
                    dataValue += `${appData[key]} `;
                } else {
                    dataValue += `${appData[key]} : `;
                }
            }
        }
        return dataValue;
    }
}


dataArea.innerHTML = appData.getAllDate();
document.body.appendChild(dataArea);


dayOfWeek.textContent = daysOfWeek[fullDate.getDay() - 1];
document.body.appendChild(dayOfWeek);

document.body.appendChild(dateOne);
document.body.appendChild(dateTwo);
document.body.appendChild(result);

btn.textContent = 'Рассчет';
document.body.appendChild(btn);

btn.addEventListener('click', function(){
    let firstDate = dateOne.value.split('.'),
        secondDate = dateTwo.value.split('.'),
        months = 0,
        days = 0,
        years = 0,
        res = 0;
    days = (firstDate[2] - secondDate[2]);
    if (days < 0) {
        days += 30;
        months = firstDate[1] - secondDate[1] - 1;
    } else {
        months = firstDate[1] - secondDate[1];
    }
    if (months < 0) {
        months += 12;
        years = firstDate[0] - secondDate[0] - 1;
    } else {
        years = firstDate[0] - secondDate[0];
    }
    arr = [years, months, days]
    result.value = arr;
})



