# Olá, aqui vou mostrar o passo a passo do meu projeto **Accounts**

# 65
## vamos iniciar o projeto 
iniciaremos o npm 
>npm init -y
* nesse projeto vamos usar apenas os modulos externos chalk e inquirer
> npm install chalk inquirer

**obs: o chalk so funcional dessa forma na versão chalk@4.1.2**


# 70
## explicando a function operation()
1. nessa primeira parte vemos que a gente faz um inquirer.prompt e dentro dele a gente cria um array e um objeto.
````js
function operation(){
    inquirer.prompt([{}])
}
````
2. dentro do objeto determinamos type, name,
message, choices nas choices colocamos todas as alternativas que o usuario terá, logo apos isso criamos o .then().catch()
* no then() pegamos a resposta do usuario é fazemos uma função baseada na resposta
* No catch() caso de algum erro mostrará no console
````js
function operation(){
    inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'criar conta', 'consultar saldo','depositar', 'sacar', 'sair'
        ],
    },
]).then((answer) =>{
    const action = answer['action']
    console.log(action)
})
.catch((err) => console.log(err))
}
````


# 71
Criamos esse if dentro do .then() que esta na função operation() neste if caso a ação seja identica a criar conta ira iniciar a função createAccount()
````js
if(action === 'criar conta'){
        createAccount()
    }
````
essa e a função que esta sendo chamada no if acima
````js
function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a serguir'))
}
````

# 72
Explicando a função buildAccount()
* primeiro eu faço a pergunta ao cliente do nome da conta 
* no primeiro if estou verificando se ja existe um diretório com o nome
* no segundo if estou verificando se o nome da conta ja existe e preciso colocar o return caso nn exista pq se nn ira da erro 
* 
````js
function buildAccount(){
    inquirer.prompt([
        {
        name: 'accountName',
        message: ['Digite um nome para sua conta:']
    },]).then((answer) =>{

        const accountName = answer['accountName']

        console.info(accountName)
        
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }// estamos verificando se um determinados diretório existe nesse caso o accounts
        
        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já existe, ecolha outro nome!'))
            buildAccount()
            return
        }// verificação se o nome da conta existe no diretório
        
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            '{"balance": 0}',
            function (err){
                console.log(err)
            }
        )
        console.log(chalk.green('Parabéns, a sua conta foi criada!'))
        operation()
    }).catch((err)=> console.log(err))
}

````

# 73
## função de sair 
esse else if foi criado para encerrar o programa 

````js
else if(action === 'sair'){
        console.log(chalk.bgBlue('Obrigado por usar o Accounts!'))
        process.exit()
    }
````

# 74

Criamos a função de depósito

````js
function deposit(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da conta que deseja depositar ?'
    }]).then((answer) =>{

        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return (deposit())
        }

    }).catch((err) => console.log(err))
}
````


# 76

criamos uma função para vermos o saldo da conta
````js
function getAccountBalance(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual conta gostaria de ver o saldo ?'
        },
    ]).then((answer)=>{
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return getAccountBalance()
        }
        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue(`O saldo da sua conta é R$${accountData.balance} `))

        operation()
    }).catch((err)=> console.log(err))
}
````

