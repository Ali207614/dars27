const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Todo = sequelize.define('todo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING, allowNull: false},
})



module.exports = {
    Todo
}