let answersesNum = 0,
    userBudget = 0,
    userMonth,
    optionalExpensesValue = 2,
    fullDate = new Date(),
    budgetValue = document.querySelector('.budget-value'),
    dayBudget = document.querySelector('.daybudget-value'),
    budgetPos = document.querySelector('.level-value'),
    expensesBtn = document.querySelector('.expenses-item-btn'),
    expensesArea = document.querySelector('.expenses-value'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    optionalExpenses = document.getElementsByClassName('optionalexpenses-item'),
    optionalExpensesArea = document.querySelector('.optionalexpenses-value'),
    expenses = document.getElementsByClassName('expenses-item'),
    incomeLst = document.getElementById('income');
    incomeValue = document.querySelector('.income-value'),
    savingsRadio = document.getElementById('savings'),
    sum = document.getElementById('sum'),
    percent = document.getElementById('percent'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    startBtn = document.getElementById('start'),
    alhpLetters = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    count = document.querySelector('.count-budget-btn');

let appData = {
    budget: '',
    optionalExpenses: [],
    income: '',
    savings: false,
    expenses: {},
    start: function() {
            let t = false;
            while (t == false) {
                userBudget = +prompt('Ваш бюджет на месяц?', '');
                if (userBudget != null) {
                    appData.budget = userBudget;
                    budgetValue.textContent = appData.budget;
                    t = true;
                } else {
                    alert('ЧТо-то пошло не так...');
                }
            }
    },
    askQ: function() {
        let expAnswer = '';
        console.log(expenses.length);
        for (let f = 0; f < expenses.length - 1; f) {
            let a = expenses[f].value,
                b = expenses[f + 1].value;
            if(!isNaN(b)){
                expAnswer += ` ${a}: ${b} `;
            }
            f +=2;
        }
        console.log(expAnswer);
        expensesArea.textContent = expAnswer;
    },
    chooseOptExpenses: function() {
        let optExpAns = [],
            flag = true;
        for(let i = 0; i < alhpLetters.length; i++) {
            for (let r = 0; r < optionalExpenses.length; r++){
                if (optionalExpenses[r].value.indexOf(alhpLetters[i]) != -1) {
                    flag = false;
                }
            }
        }
        if (flag == true) {
            for(let i = 0; i < optionalExpenses.length; i++) {
                appData.optionalExpenses[i] = optionalExpenses[i].value;
                optExpAns.push(appData.optionalExpenses[i]);
            }
            optionalExpensesArea.textContent = optExpAns.join(', ');
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 700) {
            budgetPos.textContent = 'Низкий уровень достатка!';
        } else if (appData.moneyPerDay < 2000) {
            budgetPos.textContent = 'Средний уровень достатка!';
        } else if (appData.moneyPerDay > 2000) {
            budgetPos.textContent =  'Высокий уровень достатка!';
        } else {
            budgetPos.textContent = 'error!';
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
        let incomeList = 'Способы доп. заработка:';
        appData.optionalExpenses.forEach(function(item, i){
            incomeList += `\n${i + 1} ${item}`;
        });
        alert(incomeList);
    },

}

let timeData = {
    writeHours: fullDate.getHours(),
    writeMin: fullDate.getMinutes(),
    writeSeconds: fullDate.getSeconds(),
    writeYear: fullDate.getFullYear(),
    writeMonth: fullDate.getMonth(),
    writeDate: fullDate.getDate(),
    getAllDate: function() {
        return [timeData.writeYear, timeData.writeMonth + 1, timeData.writeDate];
    },
    init: function() {
        year.value = timeData.getAllDate()[0];
        month.value = timeData.getAllDate()[1];
        day.value = timeData.getAllDate()[2];
    }
}

timeData.init();
startBtn.addEventListener('click', function(){
    appData.start();
    expensesBtn.addEventListener('click', function() {
        appData.askQ();
    });
    optionalExpensesBtn.addEventListener('click', function() {
        appData.chooseOptExpenses();
    });
    count.addEventListener('click', function(){
        appData.detectDayBudget();
        appData.detectLevel();
    });
    incomeLst.addEventListener('input', function(){
        incomeValue.textContent = incomeLst.value;
    });
    savingsRadio.addEventListener('click', function(){
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });
    percent.addEventListener('change', function(){
        if (appData.savings == true && percent.value != '' && sum != '') {
            monthSavings.textContent = sum.value * percent.value / 12 / 100;
            yearSavings.textContent = sum.value * percent.value / 100;
        }
    });
});


