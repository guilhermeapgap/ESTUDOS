const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017/testmongodb"

const client = new MongoClient(url)

async function run(){
    try{
        await client.connect()
        console.log('conectando ao MongoDB!')
    } catch(err){
        console.log(err)
    }
}

run()

module.exports = client