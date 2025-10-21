"use client";

import { MapPin, Store, Phone, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const bairros = [
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
  const [pontos, setPontos] = useState<Ponto[]>([]);
  const [bairroSelecionado, setBairroSelecionado] = useState("");

  useEffect(() => {
    const fetchPontos = async () => {
      try {
        const res = await fetch("http://localhost:3001");
        const data = await res.json();
        console.log("Dados recebidos:", data);
        setPontos(data);
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


    const handleLocalizarNoMapa = (localizacao:string) => { 
      if (pontosFiltrados.length > 0) {
        const endereco = encodeURIComponent(localizacao);
        console.log(pontosFiltrados.map(x => x))
        window.open(`https://www.google.com/maps/search/?api=1&query=${endereco}`, "_blank");
      } else {
        alert("Nenhum local encontrado.");
      }
    };
  

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="py-10 text-3xl font-bold text-gray-900 text-center sm:text-5xl">
          Escolha sua região
        </h1>

        {/* Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            value={bairroSelecionado}
            onChange={(e) => setBairroSelecionado(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Todos os bairros</option>
            {bairros.map((bairro) => (
              <option key={bairro} value={bairro}>
                {bairro}
              </option>
            ))}
          </select>
        </div>


        <h2 className="text-2xl font-bold text-center mb-6">Locais de Descarte</h2>

        {/* Lista de pontos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pontosFiltrados.map((ponto, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
                <Store className="w-5 h-5 text-gray-600" />
                {ponto.nome || "Nome não preenchido"}
              </h3>
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4" />
                {ponto.telefone || "Telefone não preenchido"}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4" />
                {ponto.endereco || "Endereço não preenchido"}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="w-4 h-4" />
                {ponto.horario || "Horário não preenchido"}
              </p>
              {ponto.descricao && (
                <p className="mt-2 text-sm italic text-gray-600">
                  "{ponto.descricao}"
                </p>
              )}
              
        <div className="right-1.5">
        <button  onClick={() => handleLocalizarNoMapa(pontosFiltrados[index].endereco)} className="  bg-[#424852] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105">
            localizar no mapa
          </button>
        </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
