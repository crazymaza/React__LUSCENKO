// Работаем в нативном JS. Создайте класс Car описывающий машину.
// Класс должен содержать свойства brand, name,
// 	weight, fuel_type, color, img.
// 	Типы данных определите самостоятельно. Создайте объект на основе класса и
// заполните данными. Выведите в консоль. Все классы подключать отдельным файлом.

// Добавьте в предыдущий класс Car метод render - который отрисовывает данные об объекте в указанный блок на
// странице. Для оформления выберите CSS https://mustard-ui.com/ и стиль оформления pricing table.
// Используя класс Car создайте несколько объектов на основе класса Car. Выведите созданные объекты на страницу.
class Car {
	constructor(brand, name, weight, fuel_type, color, img) {
		this.brand = brand;
		this.name = name;
		this.weight = weight;
		this.fuel_type = fuel_type;
		this.color = color;
		this.img = img;
	}

	render() {
		document.querySelector('.pricing-table').innerHTML += `<div class="package">
				<ul class="features">
					<li>Brand: ${this.brand}</li>
					<li>Model: ${this.name}</li>
					<li>Weight: ${this.weight}</li>
					<li>Fuel: ${this.fuel_type}</li>
					<li>Color: ${this.color}</li>
					<li><img src="${this.img}" alt=${this.brand}_${this.name}></li>
				</ul>
			</div>`
	}
}

const audiA8 = new Car('Audi', 'A8', 1995, 'Ai-95', 'Silver',
	'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/4n2/2019.png?wid=172');
const audiA3 = new Car('Audi', 'A3', 1500, 'Ai-95', 'Silver',
	'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8vm/2019.png?wid=172');
const audiA5 = new Car('Audi', 'A5', 2020, 'Ai-95', 'Silver',
	'https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f5a/2019.png?wid=172');
console.log(audiA8);
audiA8.render();
audiA3.render();
audiA5.render();