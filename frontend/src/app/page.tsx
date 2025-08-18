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
          <button className="bg-[#D47156] w-[100] h-[50] border hover:bg-[#d47156c0] vertical-align">
            Começar 
          </button>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
