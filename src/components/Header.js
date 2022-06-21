import Search from './Search.js';
import { getData, setData } from '../databus';

function Header() {
  const headerComponent = document.createElement('div');
  headerComponent.classList.add('page-header');

  headerComponent.appendChild(Search());

  const unitSwitch = document.createElement('div');
  headerComponent.appendChild(unitSwitch);
  unitSwitch.classList.add('unit-switch');

  const celcius = document.createElement('div');
  unitSwitch.appendChild(celcius);
  celcius.classList.add('unit', 'selected-unit');
  celcius.innerHTML = '<h1>Cº</h1>';
	setData('units', 'metric');

  const fahrenheit = document.createElement('div');
  unitSwitch.appendChild(fahrenheit);
  fahrenheit.classList.add('unit');
  fahrenheit.innerHTML = '<h1>Fº</h1>';

	function updateUnits(units){
		setData('units', units);
		console.log(getData(units));
		if(getData(units)){
			setData('today', getData(units).current);
			setData('daily', getData(units).daily);
			setData('hourly', getData(units).hourly);
		}
	}

	celcius.onclick = (event) => {
		celcius.classList.add('selected-unit');
		fahrenheit.classList.remove('selected-unit');
		updateUnits('metric');
	}

	fahrenheit.onclick = (event) => {
		fahrenheit.classList.add('selected-unit');
		celcius.classList.remove('selected-unit');
		updateUnits('imperial');
	}

  return headerComponent;
}

export default Header;
