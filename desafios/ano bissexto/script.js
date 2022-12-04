function verificaBi(n){
    if (n % 4 == 0) {
        return true
    } else {
        return false
    }
}

function verificar() {
    let ano = Number(document.getElementById('ano').value)
    let res = document.getElementById('res')

    res.innerHTML = `<p><strong>Analisando o ano de ${ano}</strong></p>`
    if (verificaBi(ano)) {
        res.innerHTML += `O ano de ${ano} <strong><mark style="background-color: green;">É BISSEXTO</mark></strong>&#x2705`
    } else {
        res.innerHTML += `O ano de ${ano} <strong><mark style="background-color: red;">NÃO É BISSEXTO</mark></strong>&#x274C`
    }
}