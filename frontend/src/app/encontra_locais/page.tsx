"use client";

import { MapPin, Store, Phone, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const bairrosFixos = [
  "Brooklin",
  "Interlagos",
  "Vila Mariana",
  "Saúde",
  "Jabaquara",
  "Ipiranga",
  "Sacomã",
  "Itaim Bibi",
  "Paraíso",
  "Vila Olímpia",
  "Moema",
];

type Ponto = {
  nome: string;
  telefone: string;
  endereco: string;
  email: string;
  horario: string;
  descricao: string;
};

export default function Check() {
  const navegacao = useRouter();

  const [pontos, setPontos] = useState<Ponto[]>([]);
  const [bairroSelecionado, setBairroSelecionado] = useState("");
  const [bairros, setBairros] = useState<string[]>(bairrosFixos); 

  useEffect(() => {
    const fetchPontos = async () => {
      try {
        const res = await fetch("http://localhost:3001");
        const data = await res.json();
        console.log("Dados recebidos:", data);

        setPontos(data);


        const bairrosNovos = Array.from(
          new Set(
            data.map((p: Ponto) => {
              const partes = p.endereco.split(",");
              return partes[1]?.trim() || partes[0]?.trim();
            })
          )
        );

      
        const todosBairros = Array.from(
          new Set([...bairrosFixos, ...bairrosNovos])
        );

        setBairros(todosBairros);
      } catch (err) {
        console.error("Erro ao buscar pontos:", err);
      }
    };

    fetchPontos();
  }, []);

  const pontosFiltrados = bairroSelecionado
    ? pontos.filter((ponto) =>
        ponto.endereco.toLowerCase().includes(bairroSelecionado.toLowerCase())
      )
    : pontos;

  const handleLocalizarNoMapa = (localizacao: string) => {
    if (!localizacao) return alert("Endereço inválido.");
    const endereco = encodeURIComponent(localizacao);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${endereco}`,
      "_blank"
    );
  };

  return (
    <main>
      <header>
        <nav>
          <button
            onClick={() => navegacao.push("/")}
            className="bg-[#8ea579] text-white px-6 py-2 mt-4 ml-4 rounded-xl hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Ecosolutions
          </button>
        </nav>
      </header>

      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="py-10 text-3xl font-bold text-gray-900 text-center sm:text-5xl">
            Escolha sua região
          </h1>

        
          <div className="flex justify-center mb-10">
            <select
              value={bairroSelecionado}
              onChange={(e) => setBairroSelecionado(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Todos os bairros</option>

              {bairros.sort().map((bairro) => (
                <option key={bairro} value={bairro}>
                  {bairro}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            Locais de Descarte
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pontosFiltrados.map((ponto, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                  <Store className="w-5 h-5 text-gray-600" />
                  {ponto.nome}
                </h3>

                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin className="w-4 h-4" /> {ponto.endereco}
                </p>

                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4" /> {ponto.telefone}
                </p>

                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock className="w-4 h-4" /> {ponto.horario}
                </p>

                {ponto.descricao && (
                  <p className="mt-2 text-sm italic text-gray-600">
                    "{ponto.descricao}"
                  </p>
                )}

                <button
                  onClick={() => handleLocalizarNoMapa(ponto.endereco)}
                  className="bg-[#424852] p-3 border mt-3 border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105"
                >
                  localizar no mapa
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
