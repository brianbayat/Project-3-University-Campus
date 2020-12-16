const Sequelize = require('sequelize')
const db = require('./db')

const Student = db.define('student', {
    firstName:{
        type:Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate:{
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue: 'https://i.ytimg.com/vi/mgCeH3xovDw/maxresdefault.jpg'
    },
    gpa: {
        type: Sequelize.NUMBER,
        validate: {
            isDecimal: true,
            min: 0.0,
            max: 4.0
        }
    }
})

module.exports = Student