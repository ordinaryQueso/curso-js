var agora = new Date() 
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora.`)
if (hora < 12 && hora > 4) {
    console.log('Bom dia')
} else if (hora > 12 && hora < 18 ) {
    console.log('Boa tarde')
} else if ( hora >= 18) {
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}