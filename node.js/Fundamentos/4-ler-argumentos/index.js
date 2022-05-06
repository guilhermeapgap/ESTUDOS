//o comando que está sendo executado no terminal e: node ./index.js nome=guilherme idade=20


console.log(process.argv)

const args = process.argv.slice(2)//estou resgatando o 3 indice que no caso sera o comando do terminal 

console.log(args)

const nome = args[0].split("=")[1] // dividindo a string quando ver o = e pegará o indice [1] que no caso sera o nome 

console.log(nome);

const idade = args[1].split("=")[1] // o meu args está no indice [1] pois sera no segundo argumento que estara a idade

console.log(idade);

console.log(`O meu nome e ${nome} e tenho ${idade} anos.`);

// Resgatando argumentos da linha de comando 