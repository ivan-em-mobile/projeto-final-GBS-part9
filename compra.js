const params = new URLSearchParams(window.location.search);
const produto = params.get('produto');

function getPreco(produto) {
    switch (produto) {
        case "Madeira de Pinus": return 15.00;
        case "Madeira de Eucalipto": return 18.00;
        case "Madeira de Teca": return 45.00;
        case "Madeira de Jatobá": return 50.00;
        case "Madeira de Angelim": return 35.00;
        case "Madeira de Cedro": return 30.00;
        case "Madeira de Cumaru": return 60.00;
        case "Madeira de Itaúba": return 40.00;
        case "Madeira de Freijó": return 25.00;
        case "Madeira de Caviúna": return 70.00;
        case "Madeira de Peroba": return 28.00;
        case "Madeira de Massaranduba": return 55.00;
        case "Madeira de Mogno": return 150.00;
        case "Madeira de Roxinho": return 85.00;
        case "Madeira de Sucupira": return 45.00;
        case "Madeira de Aroeira": return 38.00;
        case "Tábua de Pinus": return 20.00;
        case "Tábua de Eucalipto": return 22.00;
        default: return 0;
    }
}

if (produto) {
    document.getElementById('produto-nome').textContent = produto;

    let preco = getPreco(produto);

    document.getElementById('produto-preco').textContent = `R$ ${preco.toFixed(2)}`;

    document.getElementById('form-compra').addEventListener('submit', function(event) {
        event.preventDefault();

        const quantidade = Number(document.getElementById('quantidade').value);
        const total = preco * quantidade;

        document.getElementById('resumo-produto').textContent = `Produto: ${produto}`;
        document.getElementById('resumo-quantidade').textContent = `Quantidade: ${quantidade}`;
        document.getElementById('resumo-preco').textContent = `Total: R$ ${total.toFixed(2)}`;

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        carrinho.push({
            nome: produto,
            preco: preco,
            quantidade: quantidade,
            total: total
        });

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Produto adicionado ao carrinho!");

        window.location.href = "carrinho.html";
    });
}