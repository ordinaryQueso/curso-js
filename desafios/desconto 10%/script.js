function calcular() {
    let produto = document.querySelector('input#produto')
    let preco = document.querySelector('input#preco')
    let desconto = Number(preco.value) * 0.1
    let precof = Number(preco.value) - desconto
    let res = document.querySelector('div#res')

    res.innerHTML = `<p><strong>Calculando o desconto de 10% para ${produto.value}</strong></p>`
    res.innerHTML += `<p>O preço original era ${Number(preco.value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Voce acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%)`
    res.innerHTML += `<p>No fim, você vai pagar ${precof.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${produto.value}</p>`
}