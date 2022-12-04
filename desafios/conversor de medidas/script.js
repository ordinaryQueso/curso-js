function converter() {
    let dm = Number(window.prompt('Digite uma distancia em metros: '))
    let res = document.getElementById('res')
    if (dm == ''){
        window.alert('ERRO, digite uma distancia')
    } else {
        let dk = dm * 0.001
        let dh = dm * 0.01
        let dd = dm * 0.1
        let dc = dm * 10
        let cm = dm * 100
        let mm = dm * 1000
        
        res.innerHTML = `<strong>A distancia de ${dm} metros, corresponde a...</strong>`
        res.innerHTML += `<p>${dk} quilometros (Km)</p>`
        res.innerHTML += `<p>${dh} hectometros (Hm)</p>`
        res.innerHTML += `<p>${dd} decametros (dam)</p>`
        res.innerHTML += `<p>${dc} decimentros (dm)</p>`
        res.innerHTML += `<p>${cm} centimetros (cm)</p>`
        res.innerHTML += `<p>${mm} milimetros (mm)</p>`
    }

}