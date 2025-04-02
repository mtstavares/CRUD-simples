let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
const tbody = document.getElementById("produto-tbody");
const modal = document.getElementById("modal");
const editForm = document.getElementById("edit-form");

modal.style.display = "none";

function renderTabela() {
  tbody.innerHTML = "";
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

function abrirEdicao(index) {
  const produto = produtos[index];
  document.getElementById("edit-index").value = index;
  document.getElementById("edit-nome").value = produto.nome;
  document.getElementById("edit-categoria").value = produto.categoria;
  document.getElementById("edit-preco").value = produto.preco;
  modal.style.display = "flex";
}

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

  produtos[index] = { nome, categoria, preco };
  localStorage.setItem("produtos", JSON.stringify(produtos));
  modal.style.display = "none";
  renderTabela();
});

renderTabela();
