const minimist = require ("minimist")

const args = minimist(process.argv.slice(2))

console.log(args);

const nome = args['nome']
const profissao = args['profissao']

console.log(nome, profissao);

console.log(`Olá, meu nome e ${nome} e eu sou ${profissao}`);

//esta sendo executado no terminal:
// >node .\index.js --nome=Guilherme --profissao=programador