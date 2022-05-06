const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("qual a sua linguagem de programação favorita?", (language) => {
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close()
})

// Entendendo o Codigo
//1. no primeiro const estou importando o readline e criando uma interface de input e output

// 2. no readline.question() estou criando uma pergunta e no ,(language) estou criando uma function

// 3. depois deu um console.log() para imprimir um resultado

// 4. depois fechei meu readline com readline.close()