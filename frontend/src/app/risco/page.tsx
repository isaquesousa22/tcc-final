"use client"
import { useRouter } from "next/navigation";

export default function RiscosSaude() {
    
      const navegacao = useRouter()
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-[#374151] mb-6">
        Riscos do Lixo Eletrônico para a Saúde
      </h1>

      <p className="text-[#4B5563] leading-7 mb-4">
        O lixo eletrônico contém substâncias químicas perigosas que, quando descartadas de forma inadequada, podem trazer sérios danos à saúde humana e ao meio ambiente.
      </p>

      <h2 className="text-2xl font-semibold text-[#47573c] mt-6 mb-3">
        ☠️ Substâncias tóxicas comuns no e-lixo
      </h2>

      <ul className="list-disc pl-6 text-[#4B5563] leading-7 mb-4">
        <li>
          <strong>Chumbo:</strong> Pode afetar o sistema nervoso, especialmente em crianças.
        </li>
        <li>
          <strong>Mercúrio:</strong> Provoca danos cerebrais, nos rins e pulmões.
        </li>
        <li>
          <strong>Cádmio:</strong> Altamente cancerígeno; prejudica rins e ossos.
        </li>
        <li>
          <strong>Retardadores de chama bromados:</strong> Substâncias químicas tóxicas presentes em placas de circuito.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#47573c] mt-6 mb-3">
        🧪 Como a exposição acontece?
      </h2>

      <p className="text-[#4B5563] leading-7 mb-4">
        Quando dispositivos eletrônicos são jogados no lixo comum ou queimados, os materiais tóxicos contaminam o solo, a água e o ar. Isso pode afetar comunidades inteiras, especialmente em locais onde o lixo eletrônico é tratado de forma informal.
      </p>

      <p className="text-[#4B5563] leading-7 mb-4">
        Trabalhadores de cooperativas ou catadores sem proteção adequada também estão entre os mais afetados pela exposição direta a esses materiais.
      </p>

      <h2 className="text-2xl font-semibold text-[#47573c] mt-6 mb-3">
        🚨 Cuidados necessários
      </h2>

      <ul className="list-disc pl-6 text-[#4B5563] leading-7 mb-4">
        <li>Descartar eletrônicos apenas em pontos de coleta certificados.</li>
        <li>Evitar abrir aparelhos eletrônicos em casa.</li>
        <li>Divulgar informações sobre os riscos do e-lixo.</li>
      </ul>

      <p className="text-[#4B5563] mt-4">
        O descarte responsável protege a saúde de todos e ajuda a evitar a
        contaminação de futuras gerações.
      </p>

    <h2 className="text-2xl font-semibold text-[#47573c] mt-6 mb-4">
        📺 Vídeo educativo:  Lixo Eletrônico no Brasil, Impactos e Soluções?
    </h2>
      <div className="aspect-video mb-6">
        <iframe
          src="https://www.youtube.com/embed/watch?v=ULqLyZglrj0"
          title="Vídeo educativo lixo eletrônico"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>

         <button onClick={() => navegacao.push("/blog")}
              className="mb-3 bg-[#47573c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#3E704D] transition duration-500 hover:scale-105"
            >
              voltar
            </button>
    </div>
  );
}
