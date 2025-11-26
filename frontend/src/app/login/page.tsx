"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowLeft } from "lucide-react";

export default function Login() {
  const navegacao = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();


    console.log("Login enviado:", formData);


  }

  return (
    <main>
    <header className="">
      <nav>
        <div>
          <button
            onClick={() => navegacao.push("/")}
            className="bg-purple-600 text-white px-6 py-2 mt-4 ml-4 rounded-xl hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
      </nav>
    </header>

      <div className="border border-[#b3b3b34f] bg-[#FEFBEE] p-5 rounded-[1rem] w-full ml-190 mt-80
      max-w-md">
        <div className="text-center my-4">
          <h1 className="text-2xl">Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">


            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </p>
              <input
                type="email"
                placeholder="seuemail@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="w-full border border-[#b3b3b3] rounded-md p-2"
              />
            </div>

      
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Senha
              </p>
              <input
                type="password"
                placeholder="••••••••"
                value={formData.senha}
                onChange={(e) => handleChange("senha", e.target.value)}
                required
                className="w-full border border-[#b3b3b3] rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 mt-4"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
