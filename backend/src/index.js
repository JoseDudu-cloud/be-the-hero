const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos de HTTP
 * 
 * GET: Buscar/listar uma informação do Back-End
 * POST: Criar uma informação no Back-End
 * PUT: Alterar uma informação no Back-End
 * DELETE: Deletar uma informação do Back-End
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Parms: Parâmetros utilizados para indentificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CounchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

app.listen(3333);