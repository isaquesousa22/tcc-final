const fastify = require('fastify')({ logger: true });
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'zazaki',
  password: 'halinho',
  database: 'empresa_db',
};

let connection;

fastify.register(async function (fastifyInstance) {
  connection = await mysql.createConnection(dbConfig);
  fastify.log.info('Conectado ao MySQL');

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

  // POST /empresa - Cadastra um novo ponto
  fastifyInstance.post('/empresa', async (request, reply) => {
    const { nome, telefone, endereco, email, horario, descricao } = request.body;

    const [result] = await connection.execute(
      'INSERT INTO users (nome, telefone, endereco, email, horario, descricao) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, telefone, endereco, email, horario, descricao]
    );

    reply.send({ id: result.insertId, nome, telefone, endereco, email, horario, descricao });
  });

  // GET /empresa - Lista todos os pontos
  fastifyInstance.get('/empresa', async (request, reply) => {
    const [rows] = await connection.execute('SELECT * FROM users');
    reply.send(rows);
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    await fastify.ready();
    fastify.log.info(`Servidor rodando em http://localhost:3001`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
