"use client";
import Link from "next/link";
import { Leaf, MapPin, Store } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const navegacao = useRouter();

  return (
    <div>
      {/* ---------------- HEADER ---------------- */}
      <header className="p-5 bg-[#fdf3e6]">
        <nav className="flex justify-between items-center">
          <div className="flex gap-5">
            <a className="text-[#8ea579] font-bold">EcoSolutions</a>

            <a className="text-[#8ea579]" href="#servico">
              Services
            </a>
            <a className="text-[#8ea579]" href="#why-recycle">
              Why Recycle
            </a>
            <a className="text-[#8ea579]" href="#sobre-nos">
              About Us
            </a>
            <Link className="text-[#8ea579]" href="/blog">
              Blog
            </Link>
          </div>

          <button
            onClick={() => navegacao.push("/quiz")}
            className="bg-[#424852] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105"
          >
            Quiz
          </button>
        </nav>
      </header>

 
      <main>
       
        <section className="bg-[#8ea579] h-[540px] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Por que a reciclagem é importante?
          </h1>
          <p className="mx-auto max-w-[700px] md:text-xl mt-4 text-gray-100">
            A reciclagem é uma das maneiras mais fáceis e eficazes de proteger o nosso planeta. 
            Ela conserva recursos, economiza energia e reduz a poluição.
          </p>
        </section>

      
        <section id="servico" className="w-full py-20 bg-[#a7b996]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-16">
            <div className="border-[#00000027] backdrop-blur-sm border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#916054c0]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#916054c0]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Encontre Pontos</h3>
              <p className="text-gray-700 text-sm">
                Localize o ponto de descarte mais próximo de você.
              </p>
            </div>

            <div className="backdrop-blur-sm border-[#00000027] border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#374151]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Store className="w-6 h-6 text-[#374151]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Seja um Ponto</h3>
              <p className="text-gray-700 text-sm">
                Cadastre seu estabelecimento como ponto de coleta.
              </p>
            </div>

            <div className="backdrop-blur-sm border-[#00000027] border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#916054c0]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-[#916054c0]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Impacto Positivo</h3>
              <p className="text-gray-700 text-sm">
                Contribua para um futuro mais sustentável.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <button
              onClick={() => navegacao.push("/encontra_locais")}
              className="mb-3 bg-[#47573c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#3E704D] transition duration-500 hover:scale-105"
            >
              Encontre Pontos de Descarte
            </button>

            <button
              onClick={() => navegacao.push("/cadastrar_ponto")}
              className="mb-3 bg-[#424852] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105"
            >
              Ser um Ponto de Descarte
            </button>
          </div>
        </section>

        <section id="why-recycle" className="w-full px-8 py-20 bg-[#fff5e9]">
          <div className="text-center mb-10">
            <h1 className="text-3xl text-[#8ea579] font-bold sm:text-5xl">
              EcoSolutions
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <article className="text-center">
              <h3 className="font-bold text-[#080808] text-xl mb-2">
                Conservar Recursos
              </h3>
              <p className="text-[#7C997E] text-sm">
                A reciclagem de materiais reduz a necessidade de extrair matérias-primas da Terra.
              </p>
            </article>

            <article className="text-center">
              <h3 className="font-bold text-[#080808] text-xl mb-2">
                Proteger Ecossistemas
              </h3>
              <p className="text-[#7C997E] text-sm">
                Menor demanda por matérias-primas significa menos destruição de habitats e poluição.
              </p>
            </article>

            <article className="text-center">
              <h3 className="font-bold text-[#080808] text-xl mb-2">
                Reduzir Desperdício
              </h3>
              <p className="text-[#7C997E] text-sm">
                Cada item reciclado é um item a menos em aterros sanitários, reduzindo a contaminação do solo e da água.
              </p>
            </article>

            <article className="text-center">
              <h3 className="font-bold text-[#080808] text-xl mb-2">
                Economizar Energia
              </h3>
              <p className="text-[#7C997E] text-sm">
                Produzir com materiais reciclados requer menos energia do que fabricar produtos novos.
              </p>
            </article>
          </div>
        </section>
      </main>

  
      <footer id="sobre-nos" className="bg-[#a7b996]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-3">EcoSolutions</h2>
            <p className="text-sm text-[#f8fbff]">
              Promovemos um futuro sustentável com soluções inteligentes de reciclagem e gerenciamento de resíduos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#c2e0b9] transition">
                  Início
                </Link>
              </li>
              <li>
                <a href="#servico" className="hover:text-[#c2e0b9] transition">
                  Serviços
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#c2e0b9] transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contato</h3>
            <ul className="text-sm space-y-2">
              <li>📍 São Paulo, Brasil</li>
              <li>📧 contato@ecosolutions.com</li>
              <li>📞 (11) 98765-4321</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-[#c2e0b9] transition">
                🌿 Instagram
              </a>
              <a href="#" className="hover:text-[#c2e0b9] transition">
                🌎 LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#6b7c62] text-center py-4 text-sm text-[#d1d5db]">
          © {new Date().getFullYear()} EcoSolutions. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
