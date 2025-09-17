"use client"
import Image from "next/image";
import Link from "next/link";
import { Leaf, MapPin, Store } from "lucide-react";
import { useRouter } from "next/navigation";
 
export default function Home() {
  const navegacao= useRouter()
  return (
    <div>
      <header className="p-5 bg-[#fdf3e6]">
        <nav className="flex justify-between">
          <div className="flex gap-5">
            <a>EcoSolutions</a>
            <a href="">Home</a>
            <a href="#serviço">Services </a>
            <a href="">Why recicle </a>
            <a href="">About Us </a>
          </div>
 
        </nav>
 
 
      </header>
 
      <main>
        <div className="bg-[#a7b996] h-[540px] flex flex-col justify-center items-center"  >
          <div className="flex gap-2">
 
            <h1 className="text-4xl font-bond text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Por que a reciclagem é importante?
            </h1>
            </div>
           
          <div>
            <p className="mx-auto max-w-[700px] md:text-xl mt-4">
              A reciclagem é uma das maneiras mais fáceis e eficazes de proteger o nosso planeta. Ela conserva recursos, economiza energia e reduz a poluição.</p>
            </div>
 
 
          <button className="bg-[#424852] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105">
            Começar
          </button>
        </div>
 
        <div className="w-screen pt-12 px-20 bg-[#fff5e9] py-15 ">
 
 
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">EcoSolutions</h1>
          <p className="text-[#7C997E] font-sans mb-35">Priorizamos um futuro sustentável por meio de soluções inteligentes de reciclagem e gerenciamento de resíduos.</p>
      </div>
 
 
      <div className=" mx-auto items-start gap-8 my-30 2 md:gap-12">
 
 
      <div className="grid grid-cols-4">
        <div className="gap-1 text-center">
          <p className="font-bold text-[#080808] text-1xl">Conservar Recursos</p>
          <a className="text-[#7C997E] font-sans text-justify">A reciclagem de materiais reduz a necessidade de
            extrair matérias-primas da Terra.</a>
        </div>
 
        <div className="text-center">
          <p className="font-bold text-[#080808] text-1xl">Proteger Ecossistemas</p>
          <a className="font-sans text-[#7C997E] text-justify">Menor demanda por matérias-
            primas significa menos destruição
            de habitat e poluição, que afetam
            a vida de todos os seres vivos.</a>
        </div>
 
          <div className="text-center">
          <p className="font-bold text-[#080808] text-1xl ">Reduzir o desperdício em
            aterros sanitários</p>
          <a className="font-sans text-[#7C997E] text-justify">Cada item reciclado é um item a
             menos em um aterro sanitário,
             combatendo a contaminação do solo
             e da água impedindo alterações no funcionamento do organismo humano.</a>
        </div>
 
            <div className="text-center">
          <p className="font-bold text-[#080808] text-1xl">Economize energia</p>
          <a className="font-sans text-[#7C997E] text-justify">A fabricação de produtos a partir de
            materiais reciclados normalmente
            requer significativamente menos
            energia do que a fabricação de novos.</a>
        </div>
 
      </div>
 
      </div>
 
    </div>
 
 
 
        <div  id="serviço" className="w-full py-35 bg-[#a7b996]">
         
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-16">
              <div className="border-[#00000027] backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#916054c0]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#916054c0]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Encontre Pontos</h3>
                <p className="text-muted-foreground text-sm">
                  Localize o ponto de descarte mais próximo de você
                </p>
              </div>
 
              <div className="backdrop-blur-sm border-[#00000027] border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#374151]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Store className="w-6 h-6 text-[#374151]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Seja um Ponto</h3>
                <p className="text-muted-foreground text-sm">
                  Cadastre seu estabelecimento como ponto de coleta
                </p>
              </div>
 
              <div className="backdrop-blur-sm border-[#00000027] border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#916054c0]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-[#916054c0]" />
                </div>
                <h3 className="font-bold text-lg mb-2">Impacto Positivo</h3>
                <p className="text-muted-foreground text-sm">
                  Contribua para um futuro mais sustentável
                </p>
              </div>
            </div>
 
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
 
              <button onClick={() =>  navegacao.push("/encontra_locais")}
                className="bg-[#47573c] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#3E704D] transition duration-500 hover:scale-105"
              >
                Encontre Pontos de Descarte
                </button>
 
                <button onClick={() =>  navegacao.push("/cadastrar_ponto")}
                 className="bg-[#424852] p-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105">
                Ser Um Ponto de Descarte
              </button>
 
            </div>
 
 
       
        </div>
      </main>
 
      <footer>
 
      </footer>
    </div>
  );
}
 