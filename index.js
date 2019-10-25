const restify = require('restify');
const errs = require('restify-errors')

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

// knex para facilitar conexão com o banco
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '123456',
    database : 'db'
  }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

server.get('/', restify.plugins.serveStatic({
	directory: './dist',
	file: 'index.html'
}));


// consultando todos (select all)
server.get('/read', function (req, res, next) {

	knex('rest').then((dados)=>{
		res.send(dados);
	}, next);
});

// criando um nome (insert)
server.post('/create', function (req, res, next) {
	knex('rest').insert(req.body).then((dados)=>{
		res.send(dados);
	}, next);
});

// consultando por id
server.get('/show/:id', function (req, res, next) {
	const{id} = req.params;
	knex('rest').where('id', id).first().then((dados)=>{
		if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
		res.send(dados);
	}, next);
});

// fazendo o update (update)
server.put('/update/:id', function (req, res, next) {
	const{id} = req.params;
	knex('rest').where('id', id).update(req.body).then((dados)=>{
		if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
		res.send('dados atualizados');
	}, next);
});

// remoçao (delete)
server.del('/delete/:id', function (req, res, next) {
	const{id} = req.params;
	knex('rest').where('id', id).delete().then((dados)=>{
		if(!dados) return res.send(new errs.BadRequestError('nada foi encontrado'));
		res.send('dados excluidos');
	}, next);
});

