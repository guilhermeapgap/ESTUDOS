const conn = require ('../db/conn')

class Product {
    constructor(name,image, price, description){
        this.name = name
        this.image = image
        this.price = price
        this.description = description

    }
    save(){
        const Product = conn.db().collection('products').insertOne({
           name: this.name,
           image: this.image,
           price: this.price,
           description: this.description 
        })
        return Product
    }
    
    static getProducts(){
        const products = conn.db().collection('products').find().toArray()

        return products
    }
    
    
}

module.exports = Product