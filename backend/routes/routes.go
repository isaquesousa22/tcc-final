package routes

import (
	"backend/controllers"
	"github.com/gofiber/fiber/v2"
)

func Proprietario(app *fiber.App){

	routes := app.Group("/api/v1/proprietario")

	routes.Get("/", controllers.GetAllProprietario)

	routes.Post("/", controllers.CreateProprietario)
}