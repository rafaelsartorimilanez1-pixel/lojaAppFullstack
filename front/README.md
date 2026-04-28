# 🛒 Loja App Fullstack

Aplicação fullstack simples para gerenciamento e visualização de produtos.

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* MySQL
* React
* Axios

## 📦 Funcionalidades

* Listar produtos
* Integração entre frontend e backend
* Consumo de API

## ⚙️ Como rodar o projeto

### 🔹 Backend

1. Acesse a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=loja-tipscode
```

4. Inicie o servidor:

```bash
npm start
```

O backend estará rodando em:

```
http://localhost:4000
```

---

### 🔹 Frontend

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```

O frontend estará rodando em:

```
http://localhost:5173
```

---

## 🔗 Integração

O frontend consome os dados do backend através da rota:

```
GET / -> retorna todos os produtos
```

---

## 📁 Estrutura do projeto

```
/backend
  ├── controller
  ├── router
  ├── db.js
  └── index.js

/frontend
  ├── src
  │   ├── components
  │   ├── App.js
  │   └── services
```

---

## 🧠 Observações

* Certifique-se de que o MySQL esteja rodando
* Configure corretamente o `.env`
* Não subir o `.env` para o GitHub

---

## 📌 Autor

Desenvolvido por: Rafael Sartori Milanez
