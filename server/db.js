const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pernblog', process.env.pgUser, 'root', {
    host: 'localhost',
    dialect: 'postgres',
  });



module.exports=sequelize;