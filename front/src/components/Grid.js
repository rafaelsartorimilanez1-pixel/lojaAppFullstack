import React from 'react'

// Componente que recebe a lista de produtos via props
const Grid = ({ products }) => {

    return (
        <table>

            {/* Cabeçalho da tabela */}
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                </tr>
            </thead>

            {/* Corpo da tabela */}
            <tbody>
                {products.map((item) => {
                    return (
                        // Cada produto vira uma linha
                        <tr key={item.id}>
                            <td>{item.produtos}</td>
                            <td>{item.preco}</td>
                            <td>{item.estoque}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}

export default Grid;