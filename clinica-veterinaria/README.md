# Clínica Veterinária - API RESTful Modular

Sistema de Gestão de Pacientes e Consultas desenvolvido como avaliação prática para o curso Técnico em Desenvolvimento de Sistemas. Esta versão utiliza uma estrutura modular de pastas para melhor organização.

## Tecnologias Utilizadas

- Node.js com Express
- PostgreSQL
- Sequelize (ORM) para manipulação do banco de dados (garantindo nota máxima)
- dotenv para variáveis de ambiente

## Estrutura do Projeto

O projeto está organizado da seguinte forma:
- `src/config`: Configuração da conexão com o banco de dados.
- `src/models`: Definição dos modelos do Sequelize.
- `src/controllers`: Lógica de negócio separada por entidade (tutores, animais, consultas).
- `src/routes`: Definição das rotas separada por entidade.
- `src/index.js`: Ponto de entrada da aplicação.

## Configuração do Projeto

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados no arquivo `.env` (use o `.env.example` como base).
4. Execute o script `init.sql` no seu PostgreSQL para criar as tabelas.
5. Inicie o servidor:
   ```bash
   node src/index.js
   ```

## Rotas da API

### Tutores
- GET /tutores - Lista todos os tutores
- GET /tutores/:id - Retorna um tutor pelo ID
- POST /tutores - Cadastra um novo tutor
- PUT /tutores/:id - Atualiza um tutor
- DELETE /tutores/:id - Remove um tutor

### Animais
- GET /animais - Lista todos os animais
- GET /animais/:id - Retorna um animal pelo ID
- POST /animais - Cadastra um novo animal
- PUT /animais/:id - Atualiza um animal
- DELETE /animais/:id - Remove um animal
- GET /animais/:id/consultas - Retorna todas as consultas de um animal específico (com JOIN).

### Consultas
- GET /consultas - Lista todas as consultas
- GET /consultas/:id - Retorna uma consulta pelo ID
- POST /consultas - Registra uma nova consulta
- PUT /consultas/:id - Atualiza uma consulta
- DELETE /consultas/:id - Remove uma consulta

## Observações
Todas as funções internas do projeto seguem o padrão de nomenclatura com as iniciais MV, conforme solicitado nos requisitos.
