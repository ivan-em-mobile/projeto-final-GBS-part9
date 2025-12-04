function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let container = document.getElementById("produto-carrinho");

    if (carrinho.length === 0) {
        container.innerHTML = "<p>Carrinho vazio</p>";
        return;
    }

    let html = "";
    let totalFinal = 0;

    carrinho.forEach((item, index) => {
        html += `
            <div class="item-carrinho">
                <p><strong>Produto:</strong> ${item.nome}</p>
                <p><strong>Quantidade:</strong> ${item.quantidade}</p>
                <p><strong>Total:</strong> R$ ${item.total.toFixed(2)}</p>
                <button onclick="removerItem(${index})">Remover</button>
                <hr>
            </div>
        `;
        totalFinal += item.total;
    });

    html += `<h3>Total Geral: R$ ${totalFinal.toFixed(2)}</h3>`;

    container.innerHTML = html;
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    carregarCarrinho();
}

window.onload = carregarCarrinho;

function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Adicione itens antes de finalizar a compra.");
        return;
    }

    let totalGeral = 0;

    carrinho.forEach(item => {
        totalGeral += item.total;
    });

    // envia o total pela URL
    window.location.href = "finalizar_compra.html?total=" + totalGeral.toFixed(2);
}
