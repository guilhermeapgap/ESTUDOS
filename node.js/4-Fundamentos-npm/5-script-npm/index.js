const _ = require ('lodash')
const chalk = require( 'chalk')

const a = [1,3,4,45,55]
const b = [2,34,3,8,55]

const diff = _.difference(a,b)

console.log(chalk.bgRed(diff))

//diferenciando os dados do array a com o b

//npm install --save-dev