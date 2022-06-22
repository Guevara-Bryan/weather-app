import _ from 'lodash';
import { getData, setData, watchKey } from '../databus';

function Today() {
    const todayComponent = document.createElement('div');
    todayComponent.classList.add('today')

    const dataDisplay = document.createElement('div');
    todayComponent.appendChild(dataDisplay);
    dataDisplay.classList.add('today-data-display');

    const location = document.createElement('div');
    location.classList.add('today-location');
    dataDisplay.appendChild(location);
    location.textContent = 'Welcome';

    const todayIcon = document.createElement('img');
    dataDisplay.appendChild(todayIcon);
    todayIcon.classList.add('today-icon');

    const todayDesc = document.createElement('div');
    dataDisplay.appendChild(todayDesc);
    todayDesc.classList.add('today-desc');
    
    const rainChance = document.createElement('div');
    dataDisplay.appendChild(rainChance);
    rainChance.classList.add('today-rain', 'today-fields');


    const temperature = document.createElement('div');
    temperature.classList.add('today-temperature', 'today-fields')
    dataDisplay.appendChild(temperature);
    temperature.textContent = "...";
    
    const feelslike = document.createElement('div');
    feelslike.classList.add('today-feelslike', 'today-fields')
    dataDisplay.appendChild(feelslike);
    feelslike.textContent = "Type your city in the search bar";
    
    const datetime = document.createElement('div');
    datetime.classList.add('today-datatime', 'today-fields');
    dataDisplay.appendChild(datetime);

    const imgAttribution = document.createElement('div');
    todayComponent.appendChild(imgAttribution);
    imgAttribution.classList.add('today-img-attribution');
    

    watchKey('today', () => {
        const weather = getData('today');
        setData('background', getData(weather.weather[0].icon.substring(0, 2)).src);
        console.log(weather.weather[0].icon);
        imgAttribution.innerHTML = getData(weather.weather[0].icon.substring(0, 2)).attribution;

        location.textContent = getData('location');
        todayIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        todayDesc.textContent = weather.weather[0].description;
        rainChance.textContent = `Chance of rain: ${weather.clouds} %`
        temperature.textContent = `Temperature: ${Math.round(weather.temp)}`;
        feelslike.textContent = `Feels like: ${Math.round(weather['feels_like'])}`
        const date = new Date(weather.dt * 1000);
        const [dateStr, rest] = date.toLocaleString().split(',');
        const [hours, mins, other] = rest.split(':');
        datetime.textContent = `${date.toString().split(' ')[0]} ${dateStr} ${hours}:${mins} ${other.substring(3, other.length)}`;
    });

    return todayComponent;
}

export default Today;