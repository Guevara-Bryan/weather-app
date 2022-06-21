import { getData, watchKey } from '../databus';

function Daily() {
    const dailyComponent = document.createElement('div');
    dailyComponent.classList.add('daily')

    watchKey('daily', () => {
        const [today, ...dailyWeather] = getData('daily');
        //remove all children from dailyComponent
        while (dailyComponent.firstChild) {
            dailyComponent.removeChild(dailyComponent.firstChild);
        }

        dailyWeather.forEach(day => {
            const dayComponent = document.createElement('div');
            dailyComponent.appendChild(dayComponent);
            dayComponent.classList.add('day');

            const date = new Date(day.dt * 1000);
            const dayName = document.createElement('div');
            dayName.classList.add('day-name');
            dayComponent.appendChild(dayName);
            dayName.textContent = date.toString().split(' ')[0];

            const dayTempMax = document.createElement('div');
            dayTempMax.classList.add('day-temp-max');
            dayComponent.appendChild(dayTempMax);
            dayTempMax.textContent = `Max: ${day.temp.max}`;

            const dayTempMin = document.createElement('div');
            dayTempMin.classList.add('day-temp-min');
            dayComponent.appendChild(dayTempMin);
            dayTempMin.textContent = `Min: ${day.temp.min}`;

            const dayIcon = document.createElement('img');
            dayComponent.appendChild(dayIcon);
            dayIcon.classList.add('day-icon');
            dayIcon.src = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        });
    });

    return dailyComponent;
}

export default Daily;
