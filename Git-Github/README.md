  # Git e Github do zero ao avançado 2022 (UDEMY)

## O que é GIT: 
Software de controle de versão;
    versionamento de código

## O que o GIT proporciona: 
* Controle de histórico;
* trabalhar com equipe no mesmo projeto;
* Logs detalhados;
* Trabalhar de forma isolada




## navegando entre pastas

para escolher o disco rigido bastacolocar a letra do disco mais : 
    ex: c:

para navegar de pasta em pasta basta colocar o cd e o nome da pasta 
    ex: cd ESTUDOS


   # Comandos do GIT

## iniciando repositório (repo)
    git init
obs: iniciar o repositorio dentro da pasta destino

## status do repositório
    git status

## para monitoras arquivos 
git add "nome do arquivo sem aspas ou apenas colocar um "." sem aspas para ir em todos os arquivos"
    ex: 
    
    git add cursoGITeGithub.md ou git add .

## para fazer commit de um arquivo 
    git commit "nome do arquivo sem aspas -m "aqui serve para descrever este commit aqui sim usa as aspas" "
    ex: git commit pasta -m "descrição da pasta"

## para fazer o commit de todos os arquivos 
    git commit -m "descrição do commit"

## criando uma brach 
    git branch -M main

## adicionando no repositorio
    git remote add origin https://github.com/guilhermeapgap/git.git


## para corrigir o erro fatal: refusing to merge unrelated histories
O erro fatal: refusing to merge unrelated histories geralmente acontece quando você tenta fazer o git pull de um repositório remoto, mas o seu repositório local possuí um histórico de commits, branches, etc, diferente do que está no repositório remoto.
Para permitir que o Git faça o merge de dois projetos com históricos diferentes, é só passar o parâmetro 
--allow-unrelated-histories quando for fazer o pull, assim:

    git pull origin master --allow-unrelated-histories
## enviando para o repositório
    git push -u origin main
 

## para receber as alterações que foram feitas direto no github ou por terceiros
    git pull 

## clonando um repositorio 
vou ao github entro no repositório vou em CODE depois em HTTPS pego o link ex: https://github.com/guilhermeapgap/git.git  ai execulto o comando git clone "aqui coloco a URL sem aspas" ex:

    git clone https://github.com/guilhermeapgap/git.git

para ele não criar uma pasta basta colocar um . no final do comando 
    ex: git clone URL .  



## vendo o histórico de commits
    git log

obs: para voltar basta apertar Q

## para deixar o status original o mesmo que esta no github
    git checkout "nome do arquivo sem as aspas"
    ex: git checkout cursoGITeGithub.md

## ignorando arquivos para não serem enviado ao github
preciso criar um arquivo chamado .gitignore e dentro desse arquivo vou colocar o nome das pastas a serem ignorados ex: /pasta

## como voltar  as alterações igual ao ultimo commit que estão no github
    git reset --hard origin/"qual a brainch sem aspas"
    ex: git reset --hard origin/main

   # sobre branch

## para saber quais as branchs que eu tenho no projeto 
    git branch

## criando uma branch
    git branch "nome da branch sem aspas"

## para mudar de branch
    git checkout "nome da branch sem aspas"

## para deletar uma branch
    git branch -d "nome da branch sem aspas"

## para unir as branches
primeiro preciso entrar dentro da minha branch que eu desejo unir por exemplo branch main, quando estiver dentro da branch preciso dar o comando 

    git merge "nome da branch que eu desejo unir sem aspas" 

## voltando ao status inicial da branch 
    git stash

## para ver todas as stash
    git stash list
## revertendo um stash
    git stash apply "id do stash ex: 0 sem aspas"

obs: a mais rescente fica com o id de 0 

## para saber oq tem em cada stash 
    git stash show -p "id da stash sem aspas"

## Enviando uma branch para o github
para enviar uma branch basta apenas entrar na branch e dar um "git push" ai o codigo ia mostrar o comando que tera que executar como 

    git push --set-upstream origin estudosgit

## Puxando as branchs do github
as branchs que estão no github porem não estão no repositorio local 

    git fetch -a

depois so da um git checkout "nome da branch sem aspas"
   # tags 

## criando uma tag 
    git tag -a "nome da tag sem aspas EX: v1.0" -m "descriação da tag aqui sim usa as aspas"

## alternando entre tags 
    git checkout "nome da tag sem aspas"

## para enviar uma tag especifica para o github
    git push origin "nome da tag sem aspas"

   # outros

## dando mais performace no git  
apaga alguns arquivos, usar so quando o repositorio estiver lento

    git gc 

## mostrando meus commits resumido
    git shortlog

## mostrando meus commits detalhadamente
    git reflog


   # Parte Github

## issues do projeto
issues serve para trabalhar em uma parte expecifica do codigo exeplo abrir uma issue para arrumar um bug ou melhor algo no codigo etc.. 
- Abrir tarefas para novas funcionalidades
- Abrir tarefa para corrigir um bug
     
## pull request 
Pull request e como se fosse um merge serve para mandar algo de uma branch para outra direto no gtihub
- o tech lead vai ver o pull request vai analisar o codio e ver se pode da um merge ou não 

## wiki
serve para criar uma pagina de documentação 
    ou um passo a passo do repo

## projects 
serve para organizar o projeto como: partes a serem feitas partes em desenvolvimento etc...

## para ter membros no  repo 
ir nas settings, manade access, invite a collaborator
    
   # Markdowm 

## O que é Markdown
Markdown é uma linguadem de texto facil o Markdown tem a extensão .md igual esse aquivo em que estamos 

## tags do markdown comparando com HTML
    # = h1
    ## = h2
    ### = h3
    #### = h4
    ##### = h5
    **Texto** = <strong>texto</strong>
    _Texto_ = <em>Texto</em>

    ![Titulo da URL](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png) = <img> OBS: precisa do exclamação para indicar que e uma img

    [aqui o titulo](aqui a URL) = URL

    * text = UL

    1.
    2.
    3. = OL
    sub itens da OL
    tab 2x e numerar ex:
    1. item
            1. sub item
    
    >Este e um blockquote
    >
    > 

    ```js
    aqui e muito bom para visualizar codigos, bom expecificar a linguagem
    ```

    - [x] tasklist
    - [] serve para mostrar itens checados
    - []

    criando tabela | Descrição
    -------------- | ----------
    name| informar o nome
    size | tamanho
    

    um link que direciona para alguma parte da tela
    [direcionar para head](#tags-do-markdown-comparando-com-html)
    vou encontrar o id no github 

# colocando o markdown na pratica

# = h1
## = h2
### = h3
#### = h4
##### = h5

**Texto** = <strong>texto</strong>
_Texto_ = <em>Texto</em>

![Titulo da URL](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png) = <img> OBS: precisa do exclamação para indicar que e uma img

[aqui o titulo](aqui a URL) = URL

* text = UL

1.
2.
3. = OL
sub itens da OL
tab 2x e numerar ex:
1. item
        1. sub item
    
>Este e um blockquote
>
> 

```js
function(){
    return
    }
aqui e muito bom para visualizar codigos, bom expecificar a linguagem
```

- [x] tasklist
- [] serve para mostrar itens checados
- []

criando tabela | Descrição
-------------- | ----------
name| informar o nome
size | tamanho
    

um link que direciona para alguma parte da tela
[direcionar para head](#tags-do-markdown-comparando-com-html)
vou encontrar o id no github