const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc2','root', '',{
    host: 'localhost',
    dialect: 'mysql',
    port:3307
})

try{
    sequelize.authenticate()
    console.log('Conectamos ao MySQL!')
}catch(error){
    console.log(`Não foi possível conectar: ${error}`)
}


module.exports = sequelize