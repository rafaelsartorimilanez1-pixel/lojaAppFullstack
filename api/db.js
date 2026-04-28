// Importa o mysql com suporte a promises
import mysql from 'mysql2/promise';

// Importa e configura o dotenv
import dotenv from 'dotenv';
dotenv.config();

// Cria a conexão usando variáveis de ambiente
const connection = await mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

// Exporta a conexão para usar em outros arquivos
export default connection;