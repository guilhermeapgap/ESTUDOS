
//externo
const minimist = require ("minimist")

//interno
const soma = require('./soma.js').soma //esse .soma e a função do modulo interno 

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a']) //convertendo o argumento para inteiro
const b = parseInt(args['b'])

soma(a,b)

// comando que esta sendo executado no **terminal**
// >node .\index.js --a=20 --b=10