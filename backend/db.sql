create database empresa_db;
use empresa_db;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco TEXT NOT NULL, 
    senha TEXT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    horario VARCHAR(45) NOT NULL,
    descricao VARCHAR(500)
);

