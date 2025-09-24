const fastify = require('fastify')({ logger: true });
const { NOMEM } = require('dns');
const { request } = require('http');
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'zazaki',
  password: 'halinho',
  database: 'empresa_db',
};
let connection;

fastify.addHook('onReady', async () => {
    connection = await mysql.createConnection(dbConfig);
    fastify.log.info('Conectando a o mysql');

    await connection.execute(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nome VARCHAR(100),
          telefone VARCHAR(100),
          endereco VARCHAR(1000),
          email VARCHAR(100),
          horario VARCHAR(150),
          descricao VARCHAR(2000)
        )
      `);
});

fastify.post('/users', async(request, reply)=>{
    const  {nome, telefone, endereco, email, horario, descricao } = request.body;
    const [result] = await connection.execute(
        'INSERT INTO users (nome, telefone, endereco, email, horario, descricao) VALUES (?, ?, ?, ?, ?, ?)',
        [nome, telefone, endereco, email, horario, descricao]
        
    );
    reply.send({ id: result.insertId, nome, telefone, endereco, email, horario, descricao});
    
    fastify.get('/users', async (request, reply) => {
        const [rows] = await connection.execute('SELECT * FROM users');
        reply.send(rows);
      });

    

});

const start = async () => {
    try {
        await fastify.listen({port:3000});
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);

    }
}
 
start();