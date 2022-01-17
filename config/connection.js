const Sequelize = require('sequelize');

require('dotenv').config();

let sequlize;

if (process.env.JAWSDB_URL) {
    sequlize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequlize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;