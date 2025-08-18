package model

import (
	"gorm.io/gorm"
)

type Endereco struct{
	gorm.Model
	Estado string
	Rua string
	Numero string
	DescarteID uint
}
type Proprietario struct{
	gorm.Model
	Id uint
	Nome string
	Idade uint
	Cpf string
	Descarte []Descarte
}

type Descarte struct{
	gorm.Model
	Nome string
	ProprietarioID uint
	Endereco []Endereco
	Aberto bool
}