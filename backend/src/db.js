import mysql from "mysql2/promise"

export const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  server: '127.0.0.1',
  password: '12345',
  database: 'empresa_db',
});

db.connect(err => {
  if (err) console.log(err);
  console.log("Conectando ao mysql")
})


