function mostrarGrafico() {
  const ctx = document.getElementById("grafico").getContext("2d");
  document.getElementById("grafico").classList.remove("hidden");

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Você'],
      datasets: [{
        label: 'Números adquiridos',
        data: [1],
        backgroundColor: '#00ff88'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#fff'
          }
        }
      },
      scales: {
        y: {
          ticks: {
            color: '#fff'
          }
        },
        x: {
          ticks: {
            color: '#fff'
          }
        }
      }
    }
  });
}
