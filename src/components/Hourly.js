import Chart from 'Chart.js/auto';

import { getData, watchKey } from '../databus';

function Hourly() {
    const hourlyComponent = document.createElement('div');
    hourlyComponent.classList.add('hourly')

    const fixTime = (time) => {
        const [hours, minutes, rest] = time.split(':');
        return `${hours}:${minutes} ${rest.substring(3, rest.length)}`;
    }
    const drawChart = (labels, [temperatures, feelslike, rain]) => {
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
                        hidden: true,
                    },
                    {
                        label: 'Rain %',
                        data: rain,
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(114, 206, 242, 0.2)',
                        hidden: true,
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Hourly Weather Forecast",
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
                        beginAtZero: true,
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
        const hourlyData = getData('hourly');
        const labels = hourlyData.map(hour => fixTime(new Date(hour.dt * 1000).toLocaleString().split(',')[1]));
        const tempData = hourlyData.map(hour => hour.temp);
        const feelsLikeData = hourlyData.map(hour => hour['feels_like']);
        const rainData = hourlyData.map(hour => hour['clouds']);

        drawChart(labels, [tempData, feelsLikeData, rainData]);
    });

    return hourlyComponent;
}

export default Hourly;