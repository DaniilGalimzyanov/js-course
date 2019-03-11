
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
let exp1 = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses[exp1] = +prompt('Во сколько обойдется?');
let exp2 = prompt('Введите обязательную статью расходов в этом месяце');
appData.expenses[exp2] = +prompt('Во сколько обойдется?');


alert(`Вам понадобится ${appData.expenses[exp1] / 30} в день на ${exp1}\nВам понадобится ${appData.expenses[exp2] / 30} в день на ${exp2}`);