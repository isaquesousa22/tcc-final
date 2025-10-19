"use client"
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Leis sobre Lixo Eletrônico no Brasil",
      description: "O Projeto de Lei 4094/24 cria o Programa Nacional de Coleta, Reciclagem e Descarte de Equipamentos Eletrônicos, com o objetivo de reduzir o impacto ambiental causado pelo descarte inadequado desses produtos. A Câmara dos Deputados analisa a proposta. Agência Câmara de Notícias",
      href: "https://www.camara.leg.br/noticias/1133614-projeto-cria-programa-nacional-de-coleta-reciclagem-e-descarte-de-equipamentos-eletronicos/#:~:text=O%20Projeto%20de%20Lei%204094,pelo%20descarte%20inadequado%20desses%20produtos.",
      type: "artigo",
    },
    {
      title: "Como separar o lixo eletrônico corretamente",
      description: "Dicas práticas para o descarte consciente no dia a dia.",
      href: "/blog/separar-lixo",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/watch?v=zFItWm_5z18"
    },
       {
      title: "Riscos do lixo eletrônico para a saúde",
      description: "Descubra os perigos do descarte incorreto de eletrônicos para o meio ambiente e o corpo humano.",
      href: "/risco",
      type: "artigo",
    },
     
  ];

  
      

  return (
    <div className="min-h-screen bg-[#fffaf4] p-8">
       <header className="p-5 bg-[#fdf3e6]">
           <nav className="flex justify-between">

           <div className="flex gap-5">
            <a className="text-[#8ea579]" >EcoSolutions</a>
             <Link className="text-[#8ea579]" href="/src/">Home</Link>
            </div>
            </nav>

        </header>

      <h1 className="text-4xl font-bold mb-8 text-center text-[#374151]">Blog Educativo</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#47573c] mb-2">{post.title}</h2>
            <p className="text-[#6B7280] mb-4">{post.description}</p>

            {post.type === "video" ? (
              <div className="aspect-video mb-4">
                <iframe
                  src={post.videoUrl}
                  title={post.title}
                  allowFullScreen
                  className="w-full h-full rounded-md"
                />
              </div>
            ) : null}

            <Link
              href={post.href}
              className="text-[#3E704D] font-medium hover:underline"
            >
              Ler mais →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
