/**
* Métodos HTTP:
* 
* GET: Buscar/listar uma informação no back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/
/**
* Tipos de parâmetros:
* 
* Query Params: Parâmetros nomeados na rota após '?' (filtros, paginação)
* Rout Params: Parâmetros para identificar recursos (Ex: listar informações de apenas um usuário)
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
*/
/**
* Tipos de bancos:
* 
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc.
* NoSQL: MongoDB, CouchDB, etc.
*/
/**
 * Tipos de sintaxe em banco de dados:
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')where()
 *  Ex: Knex
 */

const express = require('express');//Requisição das funcionalidades do módulo express
const cors = require('cors');
const routes = require('./routes');//Importar a variável routes

const app = express();//Armazenando funcionalidades na aplicação

app.use(cors());
app.use(express.json()); //Converter a requisição JSON em objeto Javascript
app.use(routes);//Sempre colocar após app.use(express.json());





app.listen(3333)//separar porta para rodar a aplicação - localhost:3333
