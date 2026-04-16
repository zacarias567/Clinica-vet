const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelizeMV = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: false // Tabelas do desafio não possuem timestamps
    }
  }
);

const conectarBancoMV = async () => {
  try {
    await sequelizeMV.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

module.exports = { sequelizeMV, conectarBancoMV };
