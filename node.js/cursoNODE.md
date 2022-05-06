# Node.js   <img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/> 
<a href="#guia-rápido" style="text-align: end;"> Guia rápido </a>

## Começando com node.js
criamos um arquivo em **JS**, vamos até o terminal selecionamos a pasta destino do arquivo **JS** no terminal então damos o comando 
>node *nome do arquivo*
>
>EX: node aquivo.js
para ver os aquivos que estão na pasta basta dar o comando ls

# Aula 11
vamos importar um módulo do node nesse caso o **file System**
e vamos ler um arquivo da seguinte forma:
````js
const fs = require('fs') //file system
fs.readFile('arquivo.md','utf8',(err,data) => {

    if (err){
        console.log(err)
        return
    }
        console.log(data)
})
````
explicação do codigo: 

O const fs esta "importando" o módulo file sistem por isso estamos dando um "require('fs')"

depois estamos dando o comando readFile para ler o arquivo damos o caminho do arquivo e depois damos o parametro *'UTF8'* esse parametro e super importante para o PT-BR por causa dos acentos, logo depois um 3 parametro que e (err,data ) aqui eu recebo o erro ou os dados 

no meu **if** falamos que se recebermos o err o mesmo do parametro acima mostra o err senão mostrar o data


# Aula 20

## Módulos internos 
* Os módulos internos são criados nas pastas do projeto

* Precisamos exportar o módulo 

* Podemos utilizar a intrução module.exports

* E importar onde precisamos utilizar

* Ppara importar vamos utilizar a instrução require 


### criando um módulo 
````js
module.exports = {
    MeuModulo (a, b){ 
        console.log(a+b)
    },
}
````
não precisa de colocar o function antes do **MeuModulo** pos o codigo ja esta entendendo que e uma função.

este e um bloca de codigo reaproveitavel 

### exportanto o módulo e utilizando para outra coisa 

````js
const meuModulo = require ('./meu-modulo.js') // Importando meu  modulo

const MeuModulo = meuModulo.MeuModulo

MeuModulo(2,3)
MeuModulo(5, 10)
````

# Aula 21

## Import e export

O módulo que sera exportado
````js
function soma (a, b) {
    console.log(a + b)
}

export default soma;

````

O módulo que sera importado
````js
import soma from './meu-modulo.mjs'

soma ('a soma dos itens a, b são :', 2, 3)

````
* OBS: **A extenção do arquivo e [.mjs](https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files)**

# Aula 22

## Core Modules

* No Node temos diversos **core modules**, que são os que vêm prontos para serem utilizados

* Eles resolvem diversos problemas, como: trabalhar com arquivos e diretórios, servir aplicações e etc.

* Precisamos importar estes módulos no projeto para poder utilizar 
# Aula 23

## Resgatando argumentos da linha de comando 

o comando que está sendo executado **no terminal** e:
> node ./index.js nome=guilherme idade=20
````js
console.log(process.argv)

const args = process.argv.slice(2)//estou resgatando o 3 indice que no caso sera o comando do terminal 

console.log(args)

const nome = args[0].split("=")[1] // dividindo a string quando ver o = e pegará o indice [1] que no caso sera o nome 

console.log(nome);

const idade = args[1].split("=")[1] // o meu args está no indice [1] pois sera no segundo argumento que estara a idade

console.log(idade);

console.log(`O meu nome e ${nome} e tenho ${idade} anos.`);

````

# Aula 24 

## Módulos externos 

* os módulos externos podem ser instalados via **npm**

* para isso precisamos inicializar o **npm** no projeto, com: **npm init**

* A partir daí os módulos ficam mapeados e podemos instalar módulos 

* Que são salvos na pasta **node_modules**

*  podemos instalar módulos com npm install nome do pacote

esta sendo executado **no terminal**:
>node .\index.js --nome=Guilherme --profissao=programador

````js
const minimist = require ("minimist")

const args = minimist(process.argv.slice(2))

console.log(args);

const nome = args['nome']
const profissao = args['profissao']

console.log(nome, profissao);

console.log(`Olá, meu nome e ${nome} e eu sou ${profissao}`);
````

# Aula 25

## usando módulos internos e externos

comando que esta sendo executado no **terminal**
>node .\index.js --a=20 --b=10
````js
//externo
const minimist = require ("minimist")

//interno
const soma = require('./soma.js').soma //esse .soma e a função do modulo interno 

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //convertendo o argumento para inteiro
const b = parseInt(args['b'])

soma(a,b)
````

# Aula 26 

## Explorando o console

* Temos uma grande variedade de métodos no console, como o console.log

* Podemos imprimir mais de uma variável por vez

* Inserir variáveis entre strings

* Há um método para limpar as mensagens de console

[codigos de exeplo](https://github.com/guilhermeapgap/ESTUDOS/blob/main/node.js/Fundamentos/7-explorando-console/index.js)


# Aula 27 

## Melhorando a visualização com chalk

funciona dessa forma apenas na versão

> npm install chalk@4.1.2

````js
const chalk = require("chalk") // importando modulo

const nota = 5


if (nota >= 7){
   console.log(chalk.green.bold('parabéns você estpa aprovado')) 
} else {
    console.log(chalk.bgRed.black('Você precisa estudar mais')) 
}

````

# Aula 28

## Lendo input de dados 

* Podemos ler dados do usuário com o módulo **readline**, um Core Module

* Neste caso utilizamos o método **question**, que faz uma pergunta a ser respondida pelo usuário

* Depois podemos processar a resposta e entrar um retorno 

*Entendendo o Codigo*

1. no primeiro const estou importando o readline e criando uma interface de input e output

2. no readline.question() estou criando uma pergunta e no ,(language) estou criando uma function

3. depois deu um console.log() para imprimir um resultado

4. depois fechei meu readline com readline.close()

````js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("qual a sua linguagem de programação favorita?", (language) => {
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close()
})
````

# Aula 29 

## Abstração de input
*precisamos instalar o inquirer*
> npm install inquirer


* explicação do codigo 

1. no inquirer.prompt([{}])preciso colocar um array e um objeto ou varios assim **([{obj},{obj}])** 

2. Depois preciso colocar os elementos .the() e .carch()

3. se esta tudo certo com as perguntas ele vai para o .then() se tem algum erro ele vai para o .catch() o erro do catch a gente pega assim: .catch(err => console.log(err))

4. no .then() a gente pega as respostas (answers) e cria uma arrow function => {} dentro dessa arrow a gente pode dar o consolo.log(answers)

5. dentro da => {} eu calculei a media das notas criando um const depois disse que os valores eram inteiros da pergunta1 e na pergunta2 dividi / por 2 obtive a media

6. depois dei um console.log(`a media e : ${media}')

````js

const inquirer = require('inquirer') // importando o modulo

inquirer.prompt([{
    name: 'pergunta1',
    message: 'Qual a primeira nota? '
},{
    name: 'pergunta2',
    message: 'Qual a segunda nota? '
}]).then((answers) => {
    console.log(answers)

    const media = ((parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2 ) //calculo da media

    console.log(`A media das suas notas foi: ${media}`);
}).catch(err => console.log(err))//caso de erro 

````

# Guia rápido 
[início](#nodejs---)
