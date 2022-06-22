import { getData, setData } from '../databus';

function Search() {
  const searchComponent = document.createElement('div');
  searchComponent.classList.add('search');

  const inputField = document.createElement('input');
  searchComponent.appendChild(inputField);
  inputField.classList.add('search-text');
  inputField.type = 'text';
  inputField.placeholder = 'City ...';

  const verticalSeparator = document.createElement('div');
  searchComponent.appendChild(verticalSeparator);
  verticalSeparator.classList.add('search-separator');

  const searchIconContainer = document.createElement('div');
  searchComponent.appendChild(searchIconContainer);
  searchIconContainer.className = 'search-icon-container';
  searchIconContainer.innerHTML = '<div class="search-icon"></div>';

  const blockScreen = document.createElement('div');
  blockScreen.classList.add('block-screen');
  document.body.appendChild(blockScreen);

  const loadingIconContainer = document.createElement('div');
  searchComponent.appendChild(loadingIconContainer);
  const loadingIcon = document.createElement('div');
  loadingIconContainer.appendChild(loadingIcon);
  loadingIcon.classList.add('loading-icon');
  loadingIconContainer.classList.add('loading-icon-container');



  const submit = async function FetchQueryData(event) {
    if(inputField.value.length === 0){ return; }
    try{
      blockScreen.classList.toggle('lock');
      loadingIconContainer.classList.toggle('loading-display');
			const units = getData('units');
			const coordinateUrlRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${inputField.value}&limit=1&appid=5fc2941c3632ebc2d847785ef1c95f26`;
    	const coordinateResponse = await fetch(coordinateUrlRequest, { mode: 'cors' });
			const coordinateObj = await coordinateResponse.json();
			if(coordinateObj.length === 0){
				setData('alert', 'No match found four your search');
        blockScreen.classList.toggle('lock');
        loadingIconContainer.classList.toggle('loading-display');
				return;
			}
			setData('location', coordinateObj[0].name);
      
    	const WeatherUrlRequest = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateObj[0].lat}&lon=${coordinateObj[0].lon}&units=${getData('units')}&exclude=minutely&appid=5fc2941c3632ebc2d847785ef1c95f26`;
			const WeatherResponse = await fetch(WeatherUrlRequest, { mode: 'cors' });
			const WeatherObj = await WeatherResponse.json();
			setData('today', WeatherObj.current);
			setData('daily', WeatherObj.daily);
			setData('hourly', WeatherObj.hourly);
			setData(units, WeatherObj);
      blockScreen.classList.toggle('lock');
      loadingIconContainer.classList.toggle('loading-display');

			// Get the data for the other units and cache it
			const otherUnits = units === 'metric' ? 'imperial' : 'metric';
			const otherWeatherUrlRequest = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateObj[0].lat}&lon=${coordinateObj[0].lon}&units=${otherUnits}&exclude=minutely&appid=5fc2941c3632ebc2d847785ef1c95f26`;
			const otherWeatherResponse = await fetch(otherWeatherUrlRequest, { mode: 'cors' });
			const otherWeatherObj = await otherWeatherResponse.json();
			setData(otherUnits, otherWeatherObj);

		} catch(err) {
			console.log(err);
		}
  };

  // Events for searching the query entered.
  searchIconContainer.onclick = submit;
  inputField.addEventListener('keyup', (event) => {
    if (inputField !== document.activeElement) return;
    if (event.key !== 'Enter') return;

    submit();
  });

  return searchComponent;
}

export default Search;
