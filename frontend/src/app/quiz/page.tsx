"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { questions } from "./questions";

export default function Quiz() {
  const navegacao = useRouter();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

 
  const handleChange = (i: number, value: string) => {
    setAnswers({ ...answers, [i]: value });
  };


  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    alert(`Você acertou ${score} de ${questions.length} perguntas!`);
  };


  const handleClear = () => {
    setAnswers({});
  };

  return (
    <main>
      <header className="bg-gray-900">
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
        <h1 className="text-purple-600 ml-2 mt-4 text-4xl font-serif mb-3">
          <strong>EcoSolutions</strong>
        </h1>
        <h2 className="text-purple-600 text-4xl font-bold mb-2">QUIZ</h2>
        <p className="text-gray-400 mb-6">Teste de conhecimento</p>

        {questions.map((q, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg mb-4 w-full max-w-2xl"
          >
            <h2 className="text-white text-2xl mb-4">{q.question}</h2>
            <div className="flex flex-col gap-2">
              {q.options.map((opt, j) => (
                <label
                  key={j}
                  className="flex items-center gap-2 text-gray-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value={opt}
                    checked={answers[i] === opt}
                    onChange={() => handleChange(i, opt)}
                    className="accent-blue-500"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Botões de ação */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Conferir Resultado
          </button>

          <button
            onClick={handleClear}
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
          >
            Limpar Respostas
          </button>
        </div>
      </div>
    </main>
  );
}
