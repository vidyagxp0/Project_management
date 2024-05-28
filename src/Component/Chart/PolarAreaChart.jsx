import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarAreaChart = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [{
            label: 'My Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]
    };

    const options = {
        scales: {
            r: {
                type: 'linear', // Use linear scale for the radial axis
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };
    

    return (
        <div>
            <h2>Polar Area Chart Example</h2>
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default PolarAreaChart;
