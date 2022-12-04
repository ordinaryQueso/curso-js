function converter() {
    let cdolar = document.querySelector('input#cdolar')
    let vreal = document.querySelector('input#vreal')
    let conversao = Number(vreal.value) / Number(cdolar.value)
    window.alert(`Voce possui ${conversao.toLocaleString('en-IN',{style: 'currency', currency: 'INR', minimumFractionDigits: 2})} dolares`)
}