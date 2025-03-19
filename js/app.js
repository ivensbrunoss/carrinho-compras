let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar nome do produto, valor e quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    // calcular subtotal dos produtos
    let quantidade = document.getElementById('quantidade').value;
    let preco = valorUnitario * quantidade;

    //adicionar o produto na área do carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    //calcular valor total do carrinho
    totalGeral = totalGeral + preco;
    let campoValorTotal = document.getElementById('valor-total');
    campoValorTotal.textContent = `R$ ${totalGeral}`;

    //zerar quantidade
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}