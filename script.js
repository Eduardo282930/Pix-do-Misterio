document.getElementById("pagarBtn").addEventListener("click", () => {
  window.open("https://mpago.la/1sa1XN7", "_blank"); // link Mercado Pago
  document.getElementById("formulario").classList.remove("hidden");
  document.getElementById("verNumeroBtn").classList.remove("hidden");
});

document.getElementById("verNumeroBtn").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;

  if (!nome || !whatsapp) {
    alert("Preencha todos os campos!");
    return;
  }

  const confirmouPagamento = confirm("Você já realizou o pagamento de R$10?");

  if (confirmouPagamento) {
    const numero = Math.floor(Math.random() * 100000);
    document.getElementById("meuNumero").innerText = `#${numero}`;
    document.getElementById("numeroRevelado").classList.remove("hidden");
    document.getElementById("consultarBtn").classList.remove("hidden");
  } else {
    alert("Efetue o pagamento primeiro para receber seu número.");
  }
});

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
          labels: { color: '#fff' }
        }
      },
      scales: {
        y: { ticks: { color: '#fff' } },
        x: { ticks: { color: '#fff' } }
      }
    }
  });
}
