const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([
    { name:'nome', message:'Qual seu nome? '},
    { name:'idade',message:'Qual sua idade?'}
]).then((answer) => {
    
    if(!answer.nome || !answer.idade){
        throw new Error ('O nome e a idade são obrigatórios')
    } // Relatando o erro

     const response = `Olá ${answer.nome} sera bem-vindo, pode entrar`
     const responsenot = `Olá ${answer.nome} você tem apenas ${answer.idade} mas você precisa de 18 para poder entrar` 

     if(answer.idade >= 18 ){
         console.log(chalk.green.bold(response))
     }else{
         console.log(chalk.bgRed.black(responsenot))
    }
}).catch((err) => console.log(err))


