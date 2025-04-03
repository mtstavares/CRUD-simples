// Pega se tem algo no localstorage, se nao, cria array vaszio
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Captura o form
const form = document.getElementById("produto-form");

// Escuta o envio do submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // pega e limpa os dados
  const nome = document.getElementById("nome").value.trim();
  const categoria = document.getElementById("categoria").value.trim();
  const preco = parseFloat(document.getElementById("preco").value).toFixed(2);

  // Valida se tudo ta preenchido
  if (!nome || !categoria || isNaN(preco)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // cria objeto
  const produto = { nome, categoria, preco };

  // adiciona o objeto no array
  produtos.push(produto);

  // Aadd no local stora
  localStorage.setItem("produtos", JSON.stringify(produtos));

  
  alert("Produto cadastrado com sucesso!");


  form.reset();
});
