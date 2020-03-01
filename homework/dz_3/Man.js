// Работаем в нативном JS. Создайте класс Man описывающий человека.
// Класс должен содержать свойства height, weight,
// age, sex, name, passport, eye. Типы данных определите самостоятельно.
// Создайте объект на основе класса и заполните данными.
// Выведите в консоль. Все классы подключать отдельным файлом.

class Man {
	constructor(height, weight, age, sex, name, passport, eye) {
		this.height = height;
		this.weight = weight;
		this.age = age;
		this.sex = sex;
		this.name = name;
		this.passport = passport;
		this.eye = eye;
	}
}

console.log(new Man(170, 70, 54, 'male', 'Dan', 2342324, 'green'));