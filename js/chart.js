const ctx = document.getElementById('salesChart').getContext('2d');

const data = {
    labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
    datasets: [{
        data: [30, 40, 35, 90, 50, 60, 30, 75, 55, 65, 60, 70],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: 'orange',
        pointRadius: 5,
        borderWidth: 2,
        fill: true,
        tension: 0.4
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,  // Hides vertical grid lines
                ticks: { color: '#FFFFFF' },
                grid: { color: 'rgba(255, 255, 255, 0.1)', display: false } // Hides the vertical grid lines
            },
            y: {
                ticks: { color: '#FFFFFF', callback: value => value + '%' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }  // Keeps horizontal grid lines visible
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: '#2563EB',
                titleColor: '#FFF',
                bodyColor: '#FFF'
            },
            legend: {
                display: false  /* 🚀 Hides the "Sales" label */
            }
        }
    }
};

new Chart(ctx, config);
