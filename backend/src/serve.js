import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/register", async (req, res) => {
    const { nome, email, } = req.body;

    try {
        const sql = "INSERT INTO usuarios (nome, telefone, endereco, email, horario, descricao) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [nome, telefone, endereco, email, horario, descricao], (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao cadastrar");
            }
            res.send("Empresa cadastrada com sucesso");
        });
    } catch (error) {
        console.error(error);

    }
});

app.listen(3001, () => console.log("🚀 Servidor rodando em http://localhost:3001"));