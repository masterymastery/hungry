var Sequelize = require('sequelize')
var sequelize = require('../dbConn.js')

var blog = sequelize.define(
    'BLOG',
    {
        id: {
            type: Sequelize.BIGINT(11),
            primaryKey: true,
            allowNull: true,
            unique: true,
        },
        title: Sequelize.STRING(100), // 标题
        contentType: Sequelize.STRING(32), //
        coverPath: Sequelize.STRING(100), // 标题
        intro: Sequelize.STRING(500), //
        content: Sequelize.TEXT, // 标题
        createTime: Sequelize.DATE, //
        publishType: Sequelize.STRING(32), //
    },
    {
        tableName: 'BLOG',
        timestamps: false,
        freezeTableName: true,
    }
)

module.exports = blog
