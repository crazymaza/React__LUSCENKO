// Создайте класс Employer, который будет наследоваться от Man. Класс должен содержать поля create - дату начала работы, salary. Создайте объект employer на основе Employer. Заполните поля, выведите в консоль.

class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex);
        this.create = create;
        this.salary = salary;
    }
    render(obj, output) {
        super.render(obj, output);
        document.querySelector(output).innerHTML += `
            <p>create - ${this.create}</p>
            <p>salary - ${this.salary}</p>
        `;
    }

    // Создайте для Employer геттер для получения имени клиента. Само свойство name, переделайте в _name. Продемонстрируйте работу.
    get name() {
        return this._name;
    }

    // Создайте для Employer сеттер для сохранения имени клиента в свойство _name. Сеттер должен проверять имя на строку, обрезать пробелы. Продемонстрируйте работу.
    set name(x) {
        if(typeof(x) === 'string') {
            this._name = x.trim();
        }
    }
}

const employer = new Employer('Viktor', 32, 23424, 'male', '22.05.19', true);
console.log(employer);
employer.render(employer, '.out-2');
employer.name = 123;
console.log(employer.name);
employer.name = '456';
console.log(employer.name);

