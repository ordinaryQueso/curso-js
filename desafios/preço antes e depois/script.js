function verificar() {
    let anterior = Number(document.getElementById('anterior').value)
    let atual = Number(document.getElementById('atual').value)
    let res = document.getElementById('res')

    if (atual > anterior) {
        let diferenca = atual - anterior
        let porcDif = (100*diferenca) / anterior
        res.innerHTML = '<p><strong>Analisando os valores informados</strong></p>'
        res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa custa ${atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
        res.innerHTML += `<p>Hoje o produto esta mais caro</p>`
        res.innerHTML += `<p>O preço subiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${porcDif.toFixed(2)}% pra cima</p>`
    } else if (atual < anterior) {
        let diferenca = anterior - atual
        let porcDif = (100*diferenca) / anterior
        res.innerHTML = '<p><strong>Analisando os valores informados</strong></p>'
        res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa custa ${atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
        res.innerHTML += `<p>Hoje o produto esta mais barato</p>`
        res.innerHTML += `<p>O preço caiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${porcDif.toFixed(2)}% pra baixo</p>`
    } else {
        res.innerHTML = '<p><strong>Analisando os valores informados</strong></p>'
        res.innerHTML += '<p>Não houve alterações em relação ao preço anterior e o atual</p>'
        res.innerHTML += `<p>O produto custa ${atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`

    }
}