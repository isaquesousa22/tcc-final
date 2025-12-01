"use client"

import { ArrowLeft, Clock, Mail, MapPin, Phone, Store, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastrarPonto() {
  const nav = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
    senha: "",
    horario: "",
    descricao: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastrar ponto:", formData);

    await fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    alert("Ponto cadastrado com sucesso! Você receberá um email de confirmação em até 48 horas.");
    nav.push("/");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-8 px-4">
      <div className="relative max-w-2xl mx-auto">
        
        <div className="flex items-center justify-between mb-6">
          <Link
            href={"/"}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>

        <div className="border border-[#b3b3b34f] bg-[#FEFBEE] p-5 rounded-[1rem]">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <Store className="w-8 h-8 text-accent" />
          </div>

          <div className="text-center my-8">
            <h1 className="text-2xl">Cadastrar Ponto de Descarte</h1>
            <p>Ajude sua comunidade oferecendo um local para descarte responsável de eletrônicos</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Store className="w-4 h-4" />
                  Nome do estabelecimento
                </p>
                <input
                  id="nome"
                  type="text"
                  placeholder="Ex: EcoTech Reciclagem"
                  value={formData.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone
                </p>
                <input
                  id="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => handleChange("telefone", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Endereço completo
              </p>
              <input
                id="endereco"
                type="text"
                placeholder="Rua, número, bairro"
                value={formData.endereco}
                onChange={(e) => handleChange("endereco", e.target.value)}
                required
                className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
              />
            </div>

            <div className="grid grid-cols-1 md-cols-2 gap-4">
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email de contato
                </p>
                <input
                  id="email"
                  type="email"
                  placeholder="contato@estabelecimento.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Senha
                </p>
                <input
                  id="senha"
                  type="password"
                  placeholder="*******"
                  value={formData.senha}
                  onChange={(e) => handleChange("senha", e.target.value)}
                  required
                  className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Horário de funcionamento
              </p>
              <input
                id="horario"
                type="text"
                placeholder="Seg-Sex: 8h-18h, Sáb: 8h-12h"
                value={formData.horario}
                onChange={(e) => handleChange("horario", e.target.value)}
                required
                className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
              />
            </div>

            <div className="space-y-2">
              <p>Descrição dos serviços (opcional)</p>
              <textarea
                id="descricao"
                rows={5}
                placeholder="Descreva que tipos de eletrônicos vocês aceitam..."
                value={formData.descricao}
                onChange={(e) => handleChange("descricao", e.target.value)}
                className="w-full border border-[#b3b3b3] rounded-[0.3rem] p-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d97706] hover:bg-[#d97706]/90 text-accent-foreground text-lg py-3"
            >
              Cadastrar Ponto de Descarte
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}