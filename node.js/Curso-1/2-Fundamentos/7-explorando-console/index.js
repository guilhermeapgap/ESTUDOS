//
const x = 10 
const y = 'Algum texto'
const z = [30, 22]

console.log(x,y,z)


// contagem de impressoes
console.count(`O valor de x é ${x}, contagem da impressão`)
console.count(`O valor de x é ${x}, contagem da impressão`)
console.count(`O valor de x é ${x}, contagem da impressão`)
console.count(`O valor de x é ${x}, contagem da impressão`)



// Variavel entre string
console.log('O texto é %s esse ai ',y)


// limpar o console 
setTimeout(() => {
    console.clear() // limpando o console

},2000) // o setTimeout e uma função que executa apos um tempo nesse caso de 2s

