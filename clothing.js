const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



const clothingProducts = [
    {
        name: 'Marvel Tee',
        price: 5.00,
        category: 'Tee'
    },
    {
        name: 'DC Tee',
        price: 4.99,
        category: 'Tee'
    },
    {
        name: 'Tall Skirt',
        price: 3.99,
        category: 'Skirt'
    },
    {
        name: 'Backdress',
        price: 11.50,
        category: 'dress'
    },
    {
        name: 'gown',
        price: 21.69,
        category: 'dress'
    },
]

Product.insertMany(clothingProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })