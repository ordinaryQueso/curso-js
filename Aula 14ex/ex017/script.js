function tabuada() {
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (n.value == '') {
        window.alert('ERRO, Digite um numero')
    } else {
        tab.innerHTML = ''
        for (let c = 0; c <= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n.value} X ${c} = ${n.value * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}