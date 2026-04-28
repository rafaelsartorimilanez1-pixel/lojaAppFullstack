// Importa o mysql com suporte a promises
import mysql from 'mysql2/promise';

// Importa e configura o dotenv
import dotenv from 'dotenv';
dotenv.config();

// Cria a conexão usando variáveis de ambiente
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Exporta a conexão para usar em outros arquivos
export default connection;