// Создайте объект car и добавьте в него свойства model, weight, color и метод go(), который в консоль выводит
// строку 'go и model'.
const car = {
    model : 'Raw',
    weight : '30000', 
    color : 'Brown',
    go: function() {
        console.log(`go ${this.model}`);
    },
    mileage : '5000',
};

// Создайте объект ford, добавьте свойство year. Выведите объект в консоль.
// Создайте у ford метод go(), который выводит информацию о годе производтся и цвете в консоль.
const ford = {
    year : '2001',
    go: function() {
        console.log(`${this.year}, ${this.color}`);
    }
};
console.log(ford);

// Задайте в качестве прототипа объекта ford, объект car. Выведите объект ford в консоль.
Object.setPrototypeOf(ford, car);
console.log(ford);

// Выведите свойства ford.model, ford.weight, ford.color. Запустите метод ford.go().
console.log(`${ford.model}, ${ford.weight}, ${ford.color}`);

// Добавьте в car новое свойство mileage. Проверьте, появилось ли подобное свойство у ford?
console.log(ford.mileage);
// Вызовите у ford метод go принадлежащий прототипу.
ford.__proto__.go();

// Создайте объект chevrolet, укажите в качестве прототипа объект ford. Проверьте наличие у chevrolet свойств
            // model, color, mileage и метода go().
            // Задайте свой метод go для chevrolet.
            // Добавьте для chevrolet два свойства body_style, drive_type.
const chevrolet = {
    go : function() {},
    body_style : '',
    drive_type : '',
};
Object.setPrototypeOf(chevrolet, ford);
console.log(chevrolet);

// Переберите и выведите с помощью цикла все свойства объекта chevrolet.
for (const key in chevrolet) {
    if (chevrolet.hasOwnProperty(key)) {
        console.log(`${key} : ${chevrolet[key]}`);
    }
}
