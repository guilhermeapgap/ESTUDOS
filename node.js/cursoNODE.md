# Node.js


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

*  podemos instalar módulos com npm install <nome>

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

## usando mudulos internos e externos

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
