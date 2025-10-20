const fastify = require('fastify')({ logger: true });
const mysql = require('mysql2/promise');
const cors = require('@fastify/cors')


const db = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  server: '127.0.0.1',
  password: '',
  database: 'empresa_db',
});

db.connection(err=>{
  if(err)throw err;
  console.log("Conectando ao mysql")
})

