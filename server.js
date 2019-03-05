const express = require('express');
const app = express();
const { sequelize, Category, Product } = require('./db');
//const path = require('path');


app.use(express.static('./dist'));


app.get('/', (req, res, next) => {
    //this route sends index.html back
    res.sendFile(__dirname + '/index.html' )
})

app.get('/api/categories', (req, res, next) => {
    //this route sends back api of categories.  all categories and all products 
    Category.findAll({include:[{model: Product}]})
        .then((resp) => res.json(resp))
        .catch(next)
})

app.post('/api/categories', (req, res, next) => {
    //this route writes new category
    Category.createNewFake()
        .then((resp) => {
        res.json(resp)
        })
        .catch(next)
})

app.post('/api/categories/:id/products', (req, res, next) => {
    //this route posts new products and will associate to category based on categeoryid
    Product.createNewFake(req.params.id)
    .then((resp) => {
        res.json(resp);
    })
    .catch(next)
})


app.delete('/api/categories/:id', (req, res, next) => {
    Category.destroy({where:{id:req.params.id}})
        .then((resp) => {
            res.json(resp);
        })
        .catch(next)
})

app.delete('/api/products/:id', (req,res,next) => {
    Product.destroy({where:{id:req.params.id}})
        .then((resp) => {
            res.json(resp);
        })
        .catch(next)
})

sequelize.sync({force:true})
    .then(() => {
        const PORT = process.env.PORT || 1556
        console.log('app listening ')
        app.listen(PORT);
    })
    .catch((error) => error)
