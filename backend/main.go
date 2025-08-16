package main

import(
	"fmt"
	fiber "github.com/gofiber/fiber/v2"
)

func main(){
	app := fiber.New()
	fmt.Println("Hello")

	app.Get("/", func(c * fiber.Ctx) error {
		return c.SendString("oii")
	})

	app.Listen(":3333")
}