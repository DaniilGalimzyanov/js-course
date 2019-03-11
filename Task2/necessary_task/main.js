let answersesNum = 0;
let userBudget = +prompt('Ваш бюджет на месяц?', '');
let userMonth = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
let appData = {
    budget: userBudget,
    timeData: userMonth,
    optionalExpenses: '',
    income: '',
    savings: false,
    expenses: {},
}

// for (let i = 0; i < 2; i++) {
//     let exp = prompt('Введите обязательную статью расходов в этом месяце'),
//         expValue = prompt('Во сколько обойдется?');
//     if (exp.length > 0 && expValue.length > 0) {
//         appData.expenses[exp] = expValue;
//     } else {
//         alert('Введите корректные данные!');
//         i--;
//     }
// }

// while (answersesNum != 2) {
//     answersesNum++;
//     let exp = prompt('Введите обязательную статью расходов в этом месяце'),
//         expValue = prompt('Во сколько обойдется?');
//     if (exp.length > 0 && expValue.length > 0) {
//         appData.expenses[exp] = expValue;
//     } else {
//         alert('Введите корректные данные!');
//         answersesNum--;
//     }
// }

do {
    answersesNum++;
    let exp = prompt('Введите обязательную статью расходов в этом месяце'),
        expValue = prompt('Во сколько обойдется?');
    if (exp.length > 0 && expValue.length > 0 && exp.length < 50 && expValue.length < 50) {
        appData.expenses[exp] = expValue;
    } else {
        alert('Введите корректные данные!');
        answersesNum--;
    }
}
while(answersesNum != 2);

appData.moneyPerDay = appData.budget / 30;
alert(`Доход в день ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 700) {
    console.log('Низкий уровень достатка!');
} else if (appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка!');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка!');
} else {
    console.log('error!');
}