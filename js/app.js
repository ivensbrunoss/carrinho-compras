let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar informações do produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    //recuperar quantidade
    let quantidade = document.getElementById('quantidade').value;

    //validação
    if (quantidade > 0) {
        //adicionar o produto na área do carrinho
        let preco = valorUnitario * quantidade;
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
    } else {
        alert('Você não adicionou uma quantidade válida');
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}