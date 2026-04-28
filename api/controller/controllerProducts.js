// Importa a conexão com o banco de dados
import db from '../db.js';

// Função responsável por buscar os produtos no banco
export const getProducts = (_, res) => {

    // Query SQL para selecionar todos os produtos
    const q = 'SELECT * FROM produtos';

    // Executa a query no banco de dados
    db.query(q, (err, data) => {
        
        // Se houver erro na execução
        if (err) {
            console.log(err); // Mostra o erro no terminal
            return res.status(500).json("Error to find products"); // Retorna erro 500
        }

        // Se der tudo certo, retorna os dados com status 200 (OK)
        return res.status(200).json(data);
    });
};