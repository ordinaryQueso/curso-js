function calcular() {
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)
    let res = document.getElementById('res')
    let delta = (b**2) - 4 * a * c
    
    res.innerHTML = `<p><strong>Resolvendo Bhaskara</strong></p>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x²+${b}x+${c}=0</strong></p>`
    res.innerHTML += `<p>O calculo realizado será <strong>&Delta;=${b}²-4.${a}.${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong>&Delta;=${delta}</strong></p>`

}