import Chart from 'Chart.js/auto';
import _ from 'lodash';

import { getData, watchKey } from '../databus';

function Hourly() {
    const hourlyComponent = document.createElement('div');
    hourlyComponent.classList.add('hourly')

    const fixTime = (time) => {
        const [hours, minutes, rest] = time.split(':');
        return `${hours}:${minutes} ${rest.substring(3, rest.length)}`;
    }
    const drawChart = (labels, [temperatures, feelslike]) => {
        if (hourlyComponent.firstChild){
            hourlyComponent.removeChild(hourlyComponent.firstChild);
        }
        const canvas = document.createElement('canvas');
        hourlyComponent.appendChild(canvas);
        canvas.classList.add('hourly-chart');
    
        const context = canvas.getContext('2d');

        const chart = new Chart(context, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Temperature',
                        data: temperatures,
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(106, 250, 90, 0.2)',
                    },
                    {
                        label: 'Feels Like',
                        data: feelslike,
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(76, 34, 242, 0.2)',
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Hourly Temperature Forecast",
                        color: '#fff',
                    },
                    legend: {
                        labels: {
                            color: '#fff',
                        }
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#dbd9de',
                        },
                    },
                    y: {
                        ticks: {
                            color: '#dbd9de',
                        },
                    }
                }
            }
        });
    }

    drawChart([], []);
    watchKey('hourly', () => {
        const everyFourHours = getData('hourly');
        const labels = everyFourHours.map(hour => fixTime(new Date(hour.dt * 1000).toLocaleString().split(',')[1]));
        const tempData = everyFourHours.map(hour => hour.temp);
        const feelsLikeData = everyFourHours.map(hour => hour['feels_like']);

        drawChart(labels, [tempData, feelsLikeData]);
    });

    return hourlyComponent;
}

export default Hourly;