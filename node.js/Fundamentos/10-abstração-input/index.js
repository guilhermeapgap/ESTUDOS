// precisamos instalar o inquirer
// > npm install inquirer
//

const inquirer = require('inquirer') // importando o modulo

inquirer.prompt([{
    name: 'pergunta1',
    message: 'Qual a primeira nota? '
},{
    name: 'pergunta2',
    message: 'Qual a segunda nota? '
}]).then((answers) => {
    console.log(answers)

    const media = ((parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2 )

    console.log(`A media das suas notas foi: ${media}`);
}).catch(err => console.log(err))

// explicação do codigo 
// no inquirer.prompt([{}])preciso colocar um array e um objeto ou varios assim **([{obj},{obj}])** 
// Depois preciso colocar os elementos .the() e .carch()

// se esta tudo certo com as perguntas ele vai para o .then() se tem algum erro ele vai para o .catch()

// no .then() a gente pega as respostas (answers) e cria uma arrow function => {} dentro dessa arrow a gente pode dar o consolo.log(answers)

// dentro da => {} eu calculei a media das notas criando um const depois disse que os valores eram inteiros da pergunta1 e na pergunta2 dividi / por 2 obtive a media

// depois dei um console.log(`a medua e : ${media}`)