// Создайте класс Header.
// Класс должен содержать следующие свойства - заголовок 1, подзаголовок, девиз, изображение
// и массив контактов.
// Добавьте метод рендер, для отрисовки данного заголовка.
// Создайте объект на основе класса
// Header и отрисуйте заголовок.

class Header {
	constructor(h1, h2, p, img, contacts) {
		this.h1 = h1;
		this.h2 = h2;
		this.p = p;
		this.img = img;
		this.contacts = contacts;
	}

	render() {
		document.getElementById('h1').innerHTML = `<h1>${this.h1}</h1>`;
	}
}

const header = new Header('This is header!', 'g1', 'df', 'dfsdf', [1,2,3,4,5,6]);
console.log(header);
header.render();