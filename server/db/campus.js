const Sequelize = require('sequelize')
const db = require('./db')

const Campus = db.define('campus',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    imageUrl: {
            type: Sequelize.STRING,
            defaultValue: 'https://s-i.huffpost.com/gen/2736712/images/n-MIT-628x314.jpg'
    },
    address : {
        type: Sequelize.STRING,
        allowNull: false,
        validate : {
            notEmpty: true
        }
    },
    description: Sequelize.text
})

module.exports = Campus