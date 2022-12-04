let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log('Valor 6 não encontrado')
} else {
    console.log(`O valor 6 ta na posição ${pos}`)

}

