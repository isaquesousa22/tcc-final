import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="p-5 bg-[#F5F5DC]">
        <nav className="flex justify-between">
          <div className="flex gap-5">
            <a>EcoSolutinos</a>
            <a href="">Home</a>
            <a href="">Services </a>
            <a href="">Why recicle </a>
            <a href="">About Us </a>
          </div>
          <a href="" className="">
            Login
          </a>

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
          <button className="bg-[#D47156] w-[100] h-[50] border-2 border-solid  hover:bg-[#d47156c0]">
            Começar
          </button>
        </div>

        <div className="w-screen pt-12 px-4 bg-[#F5F5DB] h-[400px]">


        <div className="flex flex-col items-center justify-center text-center space-y-4"> 
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Por que a reciclagem é importante</h1>
          <p >A reciclagem é uma das maneiras mais fáceis e eficazes de proteger o nosso planeta. Ela conserva recursos, economiza energia e reduz a poluição.</p>
      </div>

      <div className="mx-auto grid max-w 5x1 items-start gap-8 my-30 sm:grid-cols 2 md:gap-12">
        <div className="grid gap-1 text-center">
          <p className="font-bold text-[#080808] ">Conservar Recursos</p>
          <a className="text-[#8d9e0e67]">A reciclagem de materiais como papel, 
            plástico e metal reduz a necessidade de 
            extrair matérias-primas da Terra.</a>
        </div>

        <div className="grid gap-1 text-center">
          <p className="font-bold text-[#080808] ">Proteger Ecossistemas</p>
          <a>Menor demanda por matérias-primas 
            significa menos destruição de habitat 
            e poluição que afeta a vida selvagem.</a>
        </div>

      </div>

    </div>


      </main>

      <footer>

      </footer>
    </div>
  );
}
