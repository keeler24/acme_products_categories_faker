const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const faker = require('faker')

//product fake name generator
//faker.commerce.productName()

const Category = sequelize.define('Category',{
    name: Sequelize.STRING
})

const Product = sequelize.define('Product',{
    name: Sequelize.STRING
})

Category.createNewFake = function(){
    return this.create({name:faker.company.companyName()})
}

Product.createNewFake   = function(id){
    return this.create({name:faker.commerce.productName(), CategoryId:id})
}


Category.hasMany(Product)
//Category.getProducts
//Category.setProducts
//Category.find({include... model :Product blah balh})

module.exports = {sequelize, Category, Product}
