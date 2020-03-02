// Создайте класс Man, класс должен описывать человека и содержать свойства name, age, passport, sex. Создайте на его основе объект man. Выведите объект в консоль.
// Добавьте в класс Man метод render, который будет выводить все поля объекта созданного на основе класса Man (параграфами).
class Man {
    constructor(name, age, passport, sex) {
        this._name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }
    render(obj, output) {
        let out = '';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                out += `<p>${key}: ${obj[key]}</p>`;
            }
        }
        document.querySelector(output).innerHTML = out;
    }
}

const man = new Man('Viktor', 32, 23424, 'male');
console.log(man);
man.render(man, '.out-1');
