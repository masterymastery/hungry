var Sequelize = require('sequelize')
var sequelize = require('../dbConn.js')

var test = sequelize.define(
    'test',
    {
        id: {
            type: Sequelize.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        username: Sequelize.STRING(100), 
    },
    {
        tableName: 'test',
        timestamps: false,
        freezeTableName: true,
    }
)

module.exports = test
