// Importa o framework Express para criar o servidor
import express from 'express';

// Importa o CORS, que permite requisições de outros domínios
import cors from 'cors';

// Importa o arquivo de rotas (onde estão definidas as rotas da aplicação)
import productsRouter from './router/router.js';

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta onde o servidor vai rodar
const port = process.env.PORT || 4000;

dotenv.config();

// Middleware para interpretar dados de formulários (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Habilita o uso de CORS (permite acesso de outras origens)
app.use(cors());

// Middleware para interpretar JSON nas requisições
app.use(express.json());

// Define que todas as rotas da aplicação vão usar o productsRouter
app.use('/', productsRouter);

// Inicia o servidor na porta definida
app.listen(port, (req, res) => {
    console.log(`App listening to port: ${port}`);
});