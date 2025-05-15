document.getElementById("pagarBtn").addEventListener("click", () => {
  document.getElementById("formulario").classList.remove("hidden");
});

function revelarNumero() {
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;

  if (!nome || !whatsapp) {
    alert("Preencha todos os campos!");
    return;
  }

  const numero = Math.floor(Math.random() * 100000);
  document.getElementById("meuNumero").innerText = `#${numero}`;
  document.getElementById("numeroRevelado").classList.remove("hidden");
  document.getElementById("consultarBtn").classList.remove("hidden");

  // Aqui você pode salvar no Firebase depois
}
