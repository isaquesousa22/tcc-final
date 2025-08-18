package controllers

import (
	"backend/database"
	"backend/model"
	"encoding/json"

	"github.com/gofiber/fiber/v2"
)

func GetAllProprietario(c *fiber.Ctx) error {
	var Proprietario = []model.Proprietario{}
	database.DB.Find(&Proprietario)
	return c.Status(200).JSON(Proprietario)
}

func CreateProprietario(c *fiber.Ctx) error {
	body := c.Body()
	var Proprietario model.Proprietario

	json.Unmarshal(body, &Proprietario)
		
	database.DB.Create(&Proprietario)

	return c.Status(201).JSON(fiber.Map{"mensagem":"Proprietario Criado Com Sucesso"})
}
