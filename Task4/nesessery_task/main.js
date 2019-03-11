let answersesNum = 0,
    userBudget = 0,
    userMonth,
    optionalExpensesValue = 2;

let appData = {
    budget: '',
    timeData: '',
    optionalExpenses: [],
    income: '',
    savings: false,
    expenses: {},
    start: function() {
            let t = false;
            while (t == false) {
                userBudget = +prompt('Ваш бюджет на месяц?', '');
                console.log(appData);
                userMonth = prompt('Введите дату в формате YYYY-MM-DD', '');
                if (userBudget != null && userMonth != null) {
                    appData.budget = userBudget;
                    appData.timeData = userMonth;
                    t = true;
                } else {
                    alert('ЧТо-то пошло не так...');
                }
            }
    },
    askQ: function() {
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
        console.log(appData);
    },
    chooseOptExpenses: function() {
        for(let i = 1; i != 4; i++) {
            appData.optionalExpenses[i] = prompt('Какие у вас необязательные расходы?');
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = appData.budget / 30;
        alert(`Доход в день ${appData.moneyPerDay}`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 700) {
            console.log('Низкий уровень достатка!');
        } else if (appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка!');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка!');
        } else {
            console.log('error!');
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++) {
            let answer = prompt('Введите ваш дополнительный доход через запятую');
            if (answer != null) {
                appData.optionalExpenses = answer.split(', ');
                console.log(appData.optionalExpenses);
            } else {
                i--;
            }
        }
        console.log()
        let incomeList = 'Способы доп. заработка:';
        appData.optionalExpenses.forEach(function(item, i){
            incomeList += `\n${i + 1}) ${item}`;
        });
        alert(incomeList);
    },
    allAppData: function() {
        let title = 'Наша программа включает в себя данные: '
        for(let key in appData){
            title += `\n${key}`;
        }
        alert(title);
    }
}

appData.start();
appData.detectDayBudget();
appData.detectLevel();
appData.askQ();
appData.chooseOptExpenses();
appData.chooseIncome();
appData.allAppData();