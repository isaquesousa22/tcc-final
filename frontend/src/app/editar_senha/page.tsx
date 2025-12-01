"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function EditarSenha() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    senhaAtual: "",
    novaSenha: "",
  });

  const handleChange = (campo: string, valor: string) => {
    setFormData((prev) => ({ ...prev, [campo]: valor }));
  };

  // ⛔ Proteção: só libera a tela quando o AuthContext carregar
  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);

  // ⛔ Se AuthContext ainda não carregou
  if (loading) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  // ⛔ Se não tiver usuário logado
  if (!user) {
    return (
      <p className="text-center text-red-600 mt-10">
        Você precisa estar logado para alterar sua senha.
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/update-password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user!.email,
        senhaAtual: formData.senhaAtual,
        novaSenha: formData.novaSenha,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.erro);
      return;
    }

    alert(data.mensagem);
  }

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Alterar Senha</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <p>Senha atual</p>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={formData.senhaAtual}
            onChange={(e) => handleChange("senhaAtual", e.target.value)}
            required
          />
        </div>

        <div>
          <p>Nova senha</p>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={formData.novaSenha}
            onChange={(e) => handleChange("novaSenha", e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Atualizar senha
        </button>
      </form>
    </main>
  );
}
