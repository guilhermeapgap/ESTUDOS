const conn = require ('../db/conn')

class Product {
    constructor(name, price, description){
        this.name = name
        this.price = price
        this.description = description

    }
    save(){
        const Product = conn.db().collection('products').insertOne({
           name: this.name,
           price: this.price,
           description: this.description 
        })
        return Product
    }
}

module.exports = Product