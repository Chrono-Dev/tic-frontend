
  // Função para obter o IP do usuário
function getUserIP() {
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      console.log("IP do usuário:", data.ip);
      // Agora você pode enviar o IP para o backend se necessário
      sendIPToBackend(data.ip);
    })
    .catch(error => console.error("Erro ao obter IP:", error));
}

// Função para enviar o IP para o backend
function sendIPToBackend(ip) {
  fetch("https://tic-backend.onrender.com/qr_code_accesses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({user_ip: ip, location: 'RU', proAI: true}),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message || data.error);
    })
    .catch(error => console.error("Erro ao enviar IP:", error));
}

// Chama a função para obter o IP ao carregar a página
window.onload = getUserIP;