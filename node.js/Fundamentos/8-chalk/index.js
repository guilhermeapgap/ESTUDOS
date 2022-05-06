const chalk = require("chalk") // importando modulo

const nota = 9


if (nota >= 7){
   console.log(chalk.green.bold('parabéns você estpa aprovado')) 
} else {
    console.log(chalk.bgRed.black('Você precisa estudar mais')) 
}


// funciona dessa forma apenas na versão 
//> npm install chalk@4.1.2

