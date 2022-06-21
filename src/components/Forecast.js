import Hourly from './Hourly';
import Daily from './Daily';

function Forecast() {
    const forecastComponent = document.createElement('div');
    forecastComponent.classList.add('forecast');

    forecastComponent.appendChild(Hourly());
    forecastComponent.appendChild(Daily());

    return forecastComponent;
}

export default Forecast;