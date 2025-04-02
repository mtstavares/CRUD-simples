let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const tbody = document.getElementById("produto-tbody");

function renderTabela() {
  tbody.innerHTML = "";

  if (produtos.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" style="text-align: center;">Nenhum produto cadastrado.</td>`;
    tbody.appendChild(tr);
    return;
  }

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

function removerProduto(index) {
  const confirmacao = confirm("Tem certeza que deseja remover este produto?");
  if (confirmacao) {
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    renderTabela();
  }
}

renderTabela();
