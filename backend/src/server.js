import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/", async (_, res) => {
  try {
    const [data] = await db.query("SELECT * FROM usuarios");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao listar usuários");
  }
});


app.post("/register", async (req, res) => {
  const { nome, telefone, endereco, senha, email, horario, descricao } = req.body;

  try {

    const senhaCriptografada = await bcrypt.hash(senha, 10);

 
    const sql = `
      INSERT INTO usuarios (nome, telefone, endereco, senha, email, horario, descricao)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const [data] = await db.query(sql, [
      nome,
      telefone,
      endereco,
      senhaCriptografada,
      email,
      horario,
      descricao
    ]);

  
    if (!data) throw new Error("Erro ao inserir dados");

    return res.status(201).json({ mensagem: "Empresa cadastrada com sucesso" });

  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao processar cadastro");
  }
});


app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    const [result] = await db.query(sql, [email]);

    if (result.length === 0)
      return res.status(400).send("Usuário não encontrado");

    const user = result[0];


    const senhaCorreta = await bcrypt.compare(senha, user.senha);

    if (!senhaCorreta)
      return res.status(401).send("Senha incorreta");

    return res.send(`Bem-vindo, ${user.nome}!`);

  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao processar login");
  }
});


app.listen(3001, () =>
  console.log("🚀 Servidor rodando em http://localhost:3001")
);
