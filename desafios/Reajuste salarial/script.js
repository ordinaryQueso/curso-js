function reaj() {
    let nome = document.querySelector('input#nome')
    let salario = document.querySelector('input#salario')
    let porc = document.querySelector('input#porc')
    let res = document.querySelector('div#res')
    let porc2 = Number(porc.value) / 100
    let aumento = Number(salario.value) * porc2
    let nsalario = Number(salario.value) + aumento

    res.innerHTML = `<p><strong>${nome.value} recebeu um aumento salarial</strong></p>`
    res.innerHTML += `<p>O salario era ${Number(salario.value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Com um aumento de ${porc.value}%, o salario vai aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no proximo mês</p>`
    res.innerHTML += `<p>E a partir daí, ${nome.value} vai passar a ganhar ${nsalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
}