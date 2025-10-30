"use client"
import { useState } from "react";
import { questions } from "./questions";
import { useRouter } from "next/navigation";

import { MapPin, Store, Phone, Clock, ArrowLeft, } from "lucide-react";

export default function Quiz() {
  const navegacao = useRouter()
  const [answers, setAnswers] = useState({});

  const handleChange = (i: number, value: string) => {
    setAnswers({ ...answers, [i]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (q.questions === q.answer) score++;
    });
    alert("Você acertou ${score} de ${questions.length} perguntas!");
  };

  return (
 

    <main >
      <header className="bg-gray-900 ">
       <nav>
        <div>
       <button
        onClick={() => navegacao.push("/")}
        className="bg-purple-600 text-white px-6 py-2 mt-4 ml-4 rounded-xl hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
      >
     <ArrowLeft size={20} />
      </button>
        </div>
        
       </nav>
      </header>

<div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-purple-600 ml-2 mt-4 text-4xl font-serif mb-3 " ><strong>EcoSolutions</strong></h1>
      <h2 className="text-purple-600 text-4xl font-bold mb-2">QUIZ</h2>
      <p className="text-gray-400 mb-6">Teste de conhecimento</p>
      {questions.map((q, i) => (
        <div key={i} className="bg-gray-800 p-6 rounded-lg mb-4 w-full max-w-2xl">
          <h2 className="text-white text-2xl mb-4">{q.questions}</h2>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, j) => (
              <label key={j} className="flex items-center gap-2 text-gray-200 cursor-pointer">
                <input
                  type="radio"
                  name={String(q)}
                  value={opt}
                  onChange={() => handleChange(i,opt)}
                  className="accent-blue-500"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-6 py-2 mt-4 rounded hover:bg-purple-700 transition"
      >
        Conferir Resultado
      </button>


      </div>
    </main>
  );
}