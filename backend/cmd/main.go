package main

import (
	"backend/database"
	"backend/routes"

	"github.com/gofiber/fiber/v2"
)

func main(){

	database.Connect()
	app := fiber.New()
	routes.Proprietario(app)

	app.Listen(":3333")
}