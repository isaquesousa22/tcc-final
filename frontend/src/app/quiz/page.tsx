import { questions } from "./questions";

export default function Quiz() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <div>
        <header>
          <nav className="p-5 ">
            <div className="flex my-3">
              <a className="text-purple-600">EcoSolutions</a>
            </div>
          </nav>
        </header>
      </div>
      <div className="bg-gray-900 min-h-screen items-center justify-center mb-9">
        <div className=" text-center">
          <h1 className="text-purple-600 text-4xl font-bold ">QUIZ</h1>
          <p className="text-gray-400 mb-2">Teste de conhecimento</p>
          <div className="flex text-gray-400 flex-col gap-10">
            {questions.map((question, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <h1 className="text-center text-2xl font-semibold">
                    {question.questions[0]}
                  </h1>
                  <div className="flex text-gray-400 flex-col items-center justify-center gap-3">
                    {question.options.map((option, j) => (
                      <label
                        key={j}
                        htmlFor={`q${i}-option-${j}`}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          id={`q${i}-option-${j}`}
                          name={`question-${i}`}
                          value={option}
                          className="accent-blue-500 cursor-pointer"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
