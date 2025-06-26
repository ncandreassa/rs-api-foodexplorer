# 🍽️ Food Explorer - Backend

Este é o back-end da aplicação **Food Explorer**, um menu digital interativo para um restaurante fictício. Ele foi desenvolvido com **Node.js**, **Express**, **SQLite** e **Knex**, seguindo boas práticas RESTful.

---

## 🚀 Deploy

- 🔗 [Backend hospedado no Render](https://rs-api-foodexplorer.onrender.com)

---

## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- Knex.js
- Beekeeper Studio (gerenciador de banco)
- Insomnia (testes de API)

---

## 📁 Estrutura do Projeto

```bash
📦 projeto
├── 📁 src
│   ├── 📁 controllers
│   ├── 📁 database
│   │   ├── 📁 sqlite
│   │   │   ├── 📁 migrations  # Diretório para migrações do banco SQLite
│   │   │   └── database.db  # Arquivo do banco de dados gerado
│   │   ├── 📁 knex
│   │   │   ├── 📁 migrations  # Diretório para migrações do Knex
│   │   │   └── knexfile.js  # Configuração do Knex
│   ├── 📁 middlewares
│   ├── 📁 providers  
│   ├── 📁 routes
│   ├── 📁 utils
│   ├── server.js
├── package.json
└── README.md
```

---

## 🔗 Endpoints da API

### 📂 Files
- `GET /files/image` — Retorna uma imagem

### 📂 Sessions
- `POST /sessions` — Cria uma nova sessão (login)

### 📂 Dishes
- `POST /dishes` — Cria um novo prato
- `GET /dishes` — Lista todos os pratos
- `GET /dishes/:id` — Exibe detalhes de um prato
- `PUT /dishes/:id` — Atualiza um prato
- `PATCH /dishes/image/:id` — Atualiza a imagem do prato
- `DELETE /dishes/:id` — Remove um prato

### 📂 Users
- `POST /users` — Cria um novo usuário

---

## 🧪 Testes

Você pode utilizar as seguintes ferramentas para testar e visualizar dados:

- [Insomnia](https://insomnia.rest/download) — Para testar os endpoints da API
- [Beekeeper Studio](https://www.beekeeperstudio.io/) — Para inspecionar o banco SQLite

---

## ▶️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/ncandreassa/rs-api-foodexplorer.git
```

### 2️⃣ Acesse o diretório do projeto

```bash
cd rs-api-foodexplorer
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Execute as migrações do banco de dados

```bash
npx knex migrate:latest
```

### 5️⃣ Inicie o servidor

```bash
npm run dev
```

O servidor estará rodando por padrão em:

```
http://localhost:3333
```
