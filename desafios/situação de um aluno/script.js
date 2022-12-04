function situacao() {
    let aluno = document.getElementById('aluno').value
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let res = document.getElementById('res')

    let media = (n1 + n2) / 2
    res.innerHTML = `<p><strong>Analisando a situação de ${aluno}</strong></p>`
    res.innerHTML += `<p>Com as notas de ${n1} e ${n2}, a média é ${media}</p>`
    if (media < 3) {
        res.innerHTML += `<p>Com a média abaixo de 3,0 o aluno esta  <mark style="background: rgba(255, 0, 0, 0.397);"><strong>REPROVADO</strong></mark></p>`
    } else if (media >= 3 && media <= 6) {
        res.innerHTML += `<p>Com a média entre 3,0 e 6,0 o aluno esta em <strong style="color: orange;">RECUPERAÇÃO</strong></p>`
    } else {
        res.innerHTML += `<p>Com a média acima de 6,0 o aluno esta  <mark style="background: rgba(14, 247, 14, 0.548);"><strong>APROVADO</strong></mark></p>`
    }

}