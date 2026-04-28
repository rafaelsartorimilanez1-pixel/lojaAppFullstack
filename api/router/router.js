// Importa o framework Express
import express from 'express';

// Importa a função que vai lidar com a lógica de buscar produtos
import { getProducts } from '../controller/controllerProducts.js';

// Cria uma instância do roteador do Express
const router = express.Router();

// Define uma rota GET na raiz ('/')
// Quando alguém acessar essa rota, a função getProducts será executada
router.get('/', getProducts);

// Exporta o router para ser usado no app principal (app.js ou index.js)
export default router;