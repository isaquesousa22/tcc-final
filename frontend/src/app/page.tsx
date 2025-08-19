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
          <button className="bg-[#D47156] w-[100] h-[50] border hover:bg-[#d47156c0]">
            Login
          </button>

        </nav>


      </header>

      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}
