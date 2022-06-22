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
            
            const dayIcon = document.createElement('img');
            dayComponent.appendChild(dayIcon);
            dayIcon.classList.add('day-icon');
            dayIcon.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

            const dayMain = document.createElement('div');
            dayComponent.appendChild(dayMain);
            dayMain.classList.add('day-main-text');
            dayMain.textContent = day.weather[0].main;

            const dayTempMax = document.createElement('div');
            dayTempMax.classList.add('day-temp-max');
            dayComponent.appendChild(dayTempMax);
            dayTempMax.textContent = `H: ${day.temp.max}`;

            const dayTempMin = document.createElement('div');
            dayTempMin.classList.add('day-temp-min');
            dayComponent.appendChild(dayTempMin);
            dayTempMin.textContent = `L: ${day.temp.min}`;

        });
    });

    return dailyComponent;
}

export default Daily;
