// pega se tiver algo no storage ou cria array vazio
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// pega a tabela
const tbody = document.getElementById("produto-tbody");

// renderiza os produtos cadastrados
function renderTabela() {
  tbody.innerHTML = "";

  
  if (produtos.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" style="text-align: center;">Nenhum produto cadastrado.</td>`;
    tbody.appendChild(tr);
    return;
  }

  // Cria uma linha para cada produto com btn de exclusão
  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.categoria}</td>
      <td>R$ ${produto.preco}</td>
      <td>
        <button onclick="removerProduto(${index})">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

// Função para excluir um produto
function removerProduto(index) {
  const confirmacao = confirm("Tem certeza que deseja remover este produto?");
  if (confirmacao) {
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    renderTabela();
  }
}


renderTabela();
