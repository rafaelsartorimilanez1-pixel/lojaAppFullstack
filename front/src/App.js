// Importa o axios para fazer requisições HTTP
import axios from 'axios';

// Importa React e o hook useEffect
import React, { useEffect } from 'react'

// Importa o componente que vai exibir os produtos
import Grid from './components/Grid.js'

// Importa o CSS da aplicação
import './App.css';

function App() {

  // Estado que armazena a lista de produtos
  const [products, setProducts] = React.useState([])

  // Função assíncrona para buscar produtos da API
  const getProducts = async () => {
    try {
      // Faz requisição para o backend
      const res = await axios(`http://localhost:4000/`)

      // Mostra os dados no console (debug)
      console.log(res.data)

      // Atualiza o estado com os produtos recebidos
      setProducts(res.data)

    } catch (err) {
      // Mostra erro no console caso a requisição falhe
      console.log(err)
    }
  }

  // useEffect roda quando o componente é carregado
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="App">
      <h1>Loja app fullstack</h1>

      {/* Passa os produtos como props para o componente Grid */}
      <Grid 
        products={products}
      />

    </div>
  );
}

export default App;