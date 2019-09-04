let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses:0,
    optionalExpenses:0,
    income: [],
    savings: false
};

appData.expenses = prompt("Введите обязательную статью расходов в этом месяце?") + " : ";
appData.expenses += prompt("Во сколько обойдется?");

console.log(appData.expenses);

alert(appData.budget/30);