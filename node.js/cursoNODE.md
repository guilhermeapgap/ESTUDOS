# Node.js


## Começando com node.js
criamos um arquivo em **JS**, vamos até o terminal selecionamos a pasta destino do arquivo **JS** no terminal então damos o comando 
>node *nome do arquivo*
>
>EX: node aquivo.js
para ver os aquivos que estão na pasta basta dar o comando ls

## Aula 11
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




