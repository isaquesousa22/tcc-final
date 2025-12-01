"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Perfil() {
  const { user } = useAuth();
  const navegacao = useRouter();

  const [form, setForm] = useState(user || {});

  useEffect(() => {
    if (!user) navegacao.push("/login");
  }, [user]);

  function handleChange(campo: string, valor: string) {
    setForm({ ...form, [campo]: valor });
  }

  async function salvar() {
    const res = await fetch("http://localhost:3001/editar_usuario", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Dados atualizados!");
  }

  return (
    <main className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>

      <div className="space-y-4">

        <input className="border p-2 w-full"
          value={form.nome}
          onChange={e => handleChange("nome", e.target.value)}
        />

        <input className="border p-2 w-full"
          value={form.telefone}
          onChange={e => handleChange("telefone", e.target.value)}
        />

        <input className="border p-2 w-full"
          value={form.endereco}
          onChange={e => handleChange("endereco", e.target.value)}
        />

        <textarea className="border p-2 w-full"
          value={form.descricao}
          onChange={e => handleChange("descricao", e.target.value)}
        />

        <button className="bg-green-600 text-white p-2 rounded w-full"
          onClick={salvar}
        >
          Salvar Alterações
        </button>
      </div>
    </main>
  );
}
