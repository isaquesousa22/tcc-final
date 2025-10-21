import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", async (_, res)=> {
    const [data] = await db.query("select * from usuarios")
    res.status(200).json(data)
})

app.post("/register", async (req, res) => {
    const { nome, telefone, endereco, email, horario, descricao } = req.body;

    try {
        const sql = "INSERT INTO usuarios (nome, telefone, endereco, email, horario, descricao) VALUES (?, ?, ?, ?, ?, ?)";
        const [data] = await db.query(sql, [nome, telefone, endereco, email, horario, descricao]);

        if(!data){
            throw data; 
        }
        return res.status(201).json({mensage:"Empresa cadastrada com sucesso"});
    } catch (err) {
        console.error(err);
        return res.status(500).json({mensage:err})
    }
});

app.listen(3001, () => console.log("🚀 Servidor rodando em http://localhost:3001"));