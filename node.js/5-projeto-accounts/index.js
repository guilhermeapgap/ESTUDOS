// importando os modulos
// modulos externos 
const chalk = require ('chalk')
const inquirer = require ('inquirer')

//modulos internos 
const fs = require ('fs');

// chamando a função que deve iniciar com o sistema 
operation()


// a função a seguir dara as alternativas para o usuario 
function operation(){
    inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'criar conta',
            'consultar saldo',
            'depositar', 
            'sacar', 
            'sair'
        ],
    },
]).then((answer) =>{
    const action = answer['action']
    if(action === 'criar conta'){
        createAccount()
    }else if(action === 'consultar saldo'){
        getAccountBalance()
    }else if(action === 'depositar'){
        deposit()
    }else if(action === 'sacar'){
        withdraw()
    }else if(action === 'sair'){
        console.log(chalk.bgBlue('Obrigado por usar o Accounts!'))
        process.exit()
    }
})// função dada a cada resposta 
.catch((err) => console.log(err))
}


// criando uma conta

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco '))
    console.log(chalk.green('Defina as opções da sua conta a serguir'))

    //chamando o buildAccount() depois que esta função estiver ok
    buildAccount()
}


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


//criando função de deposito
function deposit(){
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da conta que deseja depositar ?'
    }]).then((answer) =>{

        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return (deposit())
        }// verificando se a conta existe

        inquirer.prompt([{
            name: 'amount',
            message: 'Qual valor você gostaria de depósitar? '
        },
    ]).then((answer) =>{
        const amount = answer['amount']
        //add an amount
        addAmount(accountName,amount)
        operation()
    }).catch((err) => console.log(err))


    }).catch((err) => console.log(err))
}


// verificando se a conta existe
function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome ou tente novamente'))
        return false
    }
    return true
}

function addAmount(accountName,amount){
    const accountData = getAccount(accountName)
    console.log(accountData);

    if(!amount){
        console.log(chalk.bgRed.black('Ocurreu um erro, tente novamente mais tarde!'))
        return deposit()
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)//trasformando o valor em numero

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.log(err);
        }
    )
    console.log(chalk.green(`Foi depositado o valor de R$${amount} nessa conta ${accountName}`))

}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {encoding:'utf8',flag:'r'})
    return JSON.parse(accountJSON)
}

// mostrando o valor da conta

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

//sacar valor da conta
function withdraw(){
    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual nome da sua conta ?'
        },
    ]).then((answer)=>{
        const accountName = answer['accountName']

        if(!checkAccount(accountName)){
            return withdraw()
        }
        
        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você deseja sacar ?'
            },
        ]).then((answer)=>{
            const amount = answer['amount']

            //console.log(amount)
            removeAmount(accountName,amount)

        }).catch(err => console.log(err))

    }).catch((err)=> console.log(err))
}


 function removeAmount(accountName, amount){

    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black(' Ocorreu um erro tente novamente mais tarde'));
        return withdraw()
     }


    if(accountData.balance < amount){
        console.log(chalk.bgRed.black('Valor indisponível'));
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance)- parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.log(err)
        },
    )
    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`));

    operation()
}

