function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('ERRO, verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','fotobebehomem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotojovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','fotoadultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','fotovelhohomem.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','fotobebemulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','fotojovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','fotoadultomulher.png')
            } else {
                //idoso
                img.setAttribute('src','fotovelhomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}