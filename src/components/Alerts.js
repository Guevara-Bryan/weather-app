import { getData, watchKey } from "../databus";

function Alerts(){
    const alertComponent = document.createElement('div');
    alertComponent.classList.add('alerts');



    watchKey('alert', () => {
        alertComponent.textContent = getData('alert');
        alertComponent.classList.toggle('alert-show');
        setTimeout(() => {
            alertComponent.textContent = "";
            alertComponent.classList.toggle('alert-show');
        }, 3000);
    });
    return alertComponent;
}

export default Alerts;