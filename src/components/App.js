import Header from './Header';
import Today from './Today';
import Forecast from './Forecast';
import { getData, watchKey } from '../databus';
import '../styles.css';

function App() {
  const appComponent = document.createElement('div');
  appComponent.classList.add('app');

  appComponent.appendChild(Header());

  appComponent.appendChild(Today());

  appComponent.appendChild(Forecast());

  watchKey('background', () => {
    appComponent.style.backgroundImage = `url(${getData('background')})`;
  });

  return appComponent;
}

export default App;
