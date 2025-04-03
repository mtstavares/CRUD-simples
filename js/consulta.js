// pega dados no storage, se não cria array vazio
const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// pega a tabela
const tbody = document.getElementById("produto-tbody");

// rendereiza os dados na tabela
function renderTabela() {

  tbody.innerHTML = "";

  // Se não tiver produtos
  if (produtos.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="3" style="text-align: center;">Nenhum produto cadastrado.</td>`;
    tbody.appendChild(tr);
    return;
  }

  // cria linha pra cada produto
  produtos.forEach((produto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.categoria}</td>
      <td>R$ ${produto.preco}</td>
    `;
    tbody.appendChild(tr);
  });
}


renderTabela();
