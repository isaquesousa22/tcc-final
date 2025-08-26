import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="p-5 bg-[#F5F5DC]">
        <nav className="flex justify-between">
          <div className="flex gap-5">
            <a>EcoSolutinos</a>
            <a href="">Home</a>
            <a href="#serviço">Services </a>
            <a href="">Why recicle </a>
            <a href="">About Us </a>
          </div>
          <Link href="/login" className="">
            Login
          </Link>

        </nav>


      </header>

      <main>
        <div className="bg-[#5D8569] h-[540px] flex flex-col justify-center items-center"  >
          <div className="flex gap-2">

            <h1 className="text-4xl font-bond text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              EcoSolutinos

            </h1>

            <p className="mx-auto max-w-[700px] md:text-xl mt-4">Priorizamos em um futuro sustentável por meio de soluções inteligentes de reciclagem e gerenciamento de resíduos.</p>

          </div>
          <button className=" shadow-xl bg-[#D47156] w-[150] h-[50] border-2 rounded-xl hover:bg-[#d47156c0] mt-1">
            Começar
          </button>
        </div>

        <div className="w-screen pt-12 px-20 bg-[#F5F5DB] py-15 ">


        <div className="flex flex-col items-center justify-center text-center space-y-4"> 
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Por que a reciclagem é importante</h1>
          <p className="text-[#7C997E] font-sans mb-35">A reciclagem é uma das maneiras mais fáceis e eficazes de proteger o nosso planeta. Ela conserva recursos, economiza energia e reduz a poluição.</p>
      </div>


      <div className=" mx-auto items-start gap-8 my-30 2 md:gap-12">


      <div className="grid grid-cols-4">
        <div className="gap-1 text-center">
          <p className="font-bold text-[#080808] text-1xl">Conservar Recursos</p>
          <a className="text-[#7C997E] font-sans text-justify">A reciclagem de materiais como papel, 
            plástico e metal reduz a necessidade de 
            extrair matérias-primas da Terra.</a>
        </div>

        <div className="text-center">
          <p className="font-bold text-[#080808] text-1xl">Proteger Ecossistemas</p>
          <a className="font-sans text-[#7C997E] text-justify">Menor demanda por matérias-
            primas significa menos destruição
            de habitat e poluição que afeta
            a vida selvagem.</a>
        </div>

          <div className="text-center">
          <p className="font-bold text-[#080808] text-1xl ">Reduzir o desperdício em 
            aterros sanitários</p>
          <a className="font-sans text-[#7C997E] text-justify">Cada item reciclado é um item a
             menos em um aterro sanitário, 
             combatendo a contaminação do solo 
             e da água.</a>
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


        <div id="serviço" className="w-full bg-[#D3DED6] py-20 ">
           <div className="shadow-xl/20 bg-[#F9F9EB] m-auto w-[670] h-[300px] rounded-xl p-2 justify-items-center" >


            <h1  className="text-center font-bold mt-1 font-sans text-2xl">Nossos Serviços</h1>
            <h2 className=" text-center py-4">Não sabe o que fazer com seus eletrônicos antigos ou itens volumosos? Podemos ajudar.</h2>

            <p className="text-center py-3 font-sans">Nossa plataforma ajuda você a encontrar o local e o método certos para descartar seus itens de forma 
              responsável. De um micro-ondas quebrado a um computador antigo, conectamos você a centros locais 
              equipados para atender às suas necessidades específicas de reciclagem.</p>

            <button className="shadow-xl bg-[#D47156] w-[150] h-[50] border-2 rounded-xl hover:bg-[#d47156c0] mt-1">
             <a >Encontre locais de descarte</a>
            </button>

        </div>
        </div>

        <div className="w-full py-35 bg-[#F5F5DB]">
          <h1 className="text-[#000] text-center text-5xl font-extrabold mb-5 ">Localizador de Reciclagem</h1>
          <p className="text-center font-sans">Insira o material que deseja reciclar e sua localização para encontrar as melhores opções de descarte
             perto de você.</p>
             
             <div className="shadow-xl/20 mt-10 bg-[#F9F9EB] m-auto w-[670] h-[300] rounded-xl p-2 " >


            <h1 className="text-left py-3 font-sans">Material para Reciclar</h1>

            <input type="text" placeholder="  Por exemplo, garrafas plásticas, laptop antigo" className="input input-lg w-162 h-10 rounded-xl input input-neutral mb-1" />

            <h2 className="text-left py-3 font-sans">Sua localização</h2>
            
            <input type="text" placeholder="  por exemplo, cidade, código postal" className="mt-1 input input-lg w-162 h-10 rounded-xl input input-neutral" /><br />

            <button className="shadow-xl bg-[#3E704D] w-[650] h-[40] border-2 rounded-xl hover:bg-[#3e704dad] mt-4">
             <a >Encontre locais de descarte</a>
            </button>
            



        </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
