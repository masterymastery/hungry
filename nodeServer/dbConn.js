var Sequelize = require('sequelize');
// 数据库配置文件
var sqlConfig = {
    DATABASE: 'db1', // 使用哪个数据库
    USERNAME: 'root', // 用户名
    PASSWORD: '123456', // 口令
    HOST: '62.234.107.218', // 主机名
    PORT: 3307 // 端口号，MySQL默认3306
};

var sequelize = new Sequelize(sqlConfig.DATABASE, sqlConfig.USERNAME, sqlConfig.PASSWORD, {
    host: sqlConfig.HOST,
    dialect: 'mysql',
    port:sqlConfig.PORT,
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;