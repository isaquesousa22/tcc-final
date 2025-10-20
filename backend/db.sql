create database empresa_db;
use empresa_db;

CREATE TABLE empresa_db (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone INT NOT NULL UNIQUE,
    endereco VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE,
    horario VARCHAR(45) NOT NULL,
    descricao VARCHAR(500)
);

