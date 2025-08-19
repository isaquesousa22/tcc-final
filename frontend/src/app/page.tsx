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
        <div className="w-full bg-[#D3DED6] py-20 ">
           <div className="bg-[#F9F9EB] m-auto w-[600] h-[250px] rounded-xl p-2" >


            <h1 className="text-center font-bold ">Our Services</h1>
            <h2 className="py-4">Don't know what to do with your old electronics or bulky items? We can help.</h2>

            <p className="text-justify py-3">Our platform helps you find the right place and method to dispose of your items responsibly. From a broken microwave to an old computer, we connect you with local centers equipped to handle your specific recycling needs.</p>

            <button className="bg-[#D47156] w-[115] h-[50] rounded-xl">
            Find Disposal Locations 
            </button>

           </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
