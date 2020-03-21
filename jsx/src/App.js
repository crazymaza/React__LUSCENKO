import React from 'react';

class App extends React.Component {
	render() {
	  let style = {
        width: '100px',
        height: '100px',
        backgroundColor: `rgb(${Math.floor(Math.random()*255)},
                              ${Math.floor(Math.random()*255)},
                              ${Math.floor(Math.random()*255)})`,
      };

	  const array = [1, 2, 3, 4, 5];
	  const oneZeroArray = [1, 0, 1, 0];

	  const fromOneToHundred =(number) => {
	    let out = '';
        for (let i = 0; i <= number; i++) {
          out += `${i} `;
        }
        return out;
      };

      return (
          <div>
            {/*Используя Expression выведите на страницу случайное число в диапазоне от 50 до 60 включительно.
            Число должно обновляться при загрузке страницы.
            Создайте блок, через inline стили присвойте ему цвет фона.
            Причем цвет должен случайно меняться при загрузке страницы.
            Выведите с помощью Expression на страницу массив вида [1,2,3,4,5], каждый элемент списка должен
            быть выведен в отдельный параграф. Проверьте, необходимо ли добавлять ключ к параграфу? Если да - добавьте.
            У вас есть массив [1,0,1,0]. Используя expression выведите на страницу данный массив, причем
            каждый элемент должен быть помещен в div. Если элемент равен 1,
            то div должен иметь класс white, если 0 - black.
            Распечатайте цифры от 1 до 100 на странице с помощью expression.*/}

            <p>{Math.floor((Math.random()*11) + 50)}</p>
            <div style={style}></div>
            <div>{array.map(elem => <p key={elem}>{elem}</p>)}</div>
            {oneZeroArray.map(elem => {
              if (elem === 1) {
                return <div className={'white'} key={Math.floor(Math.random()*255)}>{elem}</div>;
              } else {
                return <div className={'black'} key={Math.floor(Math.random()*255)}>{elem}</div>;
              }
            })}
            <p>{fromOneToHundred(100)}</p>

          </div>
      );
	}
}

export default App;