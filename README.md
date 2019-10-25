# Aplicação RESTful com Node.js

![alt text](https://github.com/Douglas-de-Freitas/node-crud-restify/blob/master/sistema.PNG?raw=true)

Este repositório contem a aplicação RESTful desenvolvida com Node.js que controla as operações CRUD em um banco de dados pg (postgres). Você pode encontrar um curso completo com a explicação do desenvolvimento acessando o link https://www.udemy.com/aplicacoes-web-na-pratica-javascript-nodejs/?couponCode=FB_DEC_JANFEB

Os seguintes módulos e ferramentas foram utilizados para o desenvolvimento da aplicação:

Cliente de acesso ao servidor: https://www.getpostman.com/

Módulo para manter o servidor funcionando: https://github.com/remy/nodemon

Framework para rotas REST: https://github.com/restify/node-restify

Plugin para definir mensagens de erro: https://github.com/restify/errors

Módulo ORM para Pg, Mysql ou qualquer outro: https://github.com/tgriesser/knex, http://knexjs.org

## Instalação e execução

Para testar a aplicação, você deve ter o Postgres instalado, com a estrutura de banco de dados e tabela já criados. Você pode executar o script a seguir para gerar esta estrutura!

```sql
create table rest(
	id serial not null primary key,
	name varchar(30) not null
);

insert into rest values(1, 'Ricardo Teixeira');
insert into rest values(2, 'Maria Joaquina');
```

No arquivo index.js, troque os valores de configuração do MySQL por aqueles utilizados por você.

```javascript
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'seu_host',
    user : 'seu_usuario',
    password : 'sua_senha',
    database : 'seu_banco'
    }
});
```

Acesse o terminal e execute o comando `npm i -g nodemon` para instalar o nodemon como global.

Em seguida, dentro da pasta do projeto, execute

```
npm install
```

Após concluída a instalação, execute o comando `nodemon index.js`

A partir do **Postman**, basta acessar as rotas criadas com os verbos http corretos.

Referência: https://github.com/bmarchete/node-crud-restify
