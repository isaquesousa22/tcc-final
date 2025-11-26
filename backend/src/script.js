const API_URL = "http://localhost:3001";

async function registrar() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const senha = document.getElementById("senha").value;
  const email = document.getElementById("email").value;
  const horario = document.getElementById("horario").value;
  const descricao = document.getElementById("descricao").value;

  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, telefone, endereco, email, horario, descricao })
  });

  document.getElementById("mensagem").innerText = await res.text();
}