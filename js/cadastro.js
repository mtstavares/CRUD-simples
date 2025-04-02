// Recupera os produtos já cadastrados do localStorage ou cria array vazio
let produtos = JSON.parse(localStorage.getItem("produto")) || [];

// Captura o formulário
const form = document.getElementById("produto-form");

// Escuta o evento de envio do formulário
form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Coleta os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const preco = parseFloat(document.getElementById("preco").value).toFixed(2);
  
    // Validação simples
    if (!nome || !categoria || isNaN(preco)) {
      alert("Preencha todos os campos corretamente.");
      return;
    }
  
    // Cria o objeto do produto
    const produto = { nome, categoria, preco };
  
    // Adiciona ao array e salva no localStorage
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  
    // Feedback e limpeza
    alert("✅ Produto cadastrado com sucesso!");
    form.reset();
  });
  