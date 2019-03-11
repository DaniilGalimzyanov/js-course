let answersesNum = 0,
    userBudget,
    userMonth,
    optionalExpensesValue = 2;

start();
let appData = {
    budget: userBudget,
    timeData: userMonth,
    optionalExpenses: {},
    income: '',
    savings: false,
    expenses: {}
}
askQ();
chooseOptExpenses();
detectDayBudget();
detectLevel();
console.log(appData);

function start() {
    let t = false;
    while (t == false) {
        userBudget = +prompt('Ваш бюджет на месяц?', '');
        userMonth = prompt('Введите дату в формате YYYY-MM-DD', '');
        if (userBudget != 0 && userMonth.length != 0) {
            t = true;
        } else {
            alert('ЧТо-то пошло не так...');
        }
    }
}
function askQ() {
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
}
function chooseOptExpenses() {
    for(let i = 1; i != 4; i++) {
        appData.optionalExpenses[i] = prompt('Какие у вас необязательные расходы?');
    }
}
function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;
    alert(`Доход в день ${appData.moneyPerDay}`);
}

function detectLevel() {
    if (appData.moneyPerDay < 700) {
        console.log('Низкий уровень достатка!');
    } else if (appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка!');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка!');
    } else {
        console.log('error!');
    }
}