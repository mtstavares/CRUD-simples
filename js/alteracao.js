// pega se tiver algo no localstora, se não cria array vazio
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// elementos do html
const tbody = document.getElementById("produto-tbody");
const modal = document.getElementById("modal");
const editForm = document.getElementById("edit-form");

// esconde a tabela primeiro
if (modal) modal.style.display = "none";

// renderiza a table
function renderTabela() {
  tbody.innerHTML = "";

  // se não tiver nenhum produto
  if (produtos.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" style="text-align: center;">Nenhum produto cadastrado.</td>`;
    tbody.appendChild(tr);
    return;
  }

  // se tiver produto, cria uma linha com btn pra ação
  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.categoria}</td>
      <td>R$ ${produto.preco}</td>
      <td>
        <button onclick="abrirEdicao(${index})">Editar</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

// abre o modal e preenche nos campos
function abrirEdicao(index) {
  const produto = produtos[index];

  document.getElementById("edit-index").value = index;
  document.getElementById("edit-nome").value = produto.nome;
  document.getElementById("edit-categoria").value = produto.categoria;
  document.getElementById("edit-preco").value = produto.preco;

  modal.style.display = "block";
}

// limpa e envia o form
editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const index = document.getElementById("edit-index").value;
  const nome = document.getElementById("edit-nome").value.trim();
  const categoria = document.getElementById("edit-categoria").value.trim();
  const preco = parseFloat(document.getElementById("edit-preco").value).toFixed(2);


  if (!nome || !categoria || isNaN(preco)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  // poe o produto na posição correta
  produtos[index] = { nome, categoria, preco };

  // salve no localstorage
  localStorage.setItem("produtos", JSON.stringify(produtos));

  // oulta o modal e atualiza a tabela
  modal.style.display = "none";
  renderTabela();
});

renderTabela();
