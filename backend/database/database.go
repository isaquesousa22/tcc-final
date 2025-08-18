package database

import (
	"backend/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect(){
	
	db, err := gorm.Open(mysql.Open("root:root@tcp(127.0.0.1:3306)/reciclagem_db?charset=utf8mb4&parseTime=True&loc=Local"), &gorm.Config{})

	if err != nil {
		panic("Error ao Conectar no Banco : " + err.Error())
	}

	db.AutoMigrate(&model.Proprietario{}, &model.Descarte{}, &model.Endereco{})

	DB = db
}