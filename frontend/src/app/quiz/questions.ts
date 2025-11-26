export type QuestionData = {
  question: string;
  options: string[];
  answer: string;
};

export const questions: QuestionData[] = [
  {
    question: "A EcoSolutions recicla todo tipo de lixo eletrônico?",
    options: ["Sim", "Não", "Quase todos", "Só lixos específicos"],
    answer: "Não",
  },
  {
    question:
      "Qual é a estimativa de lixos eletrônicos descartados corretamente no Brasil?",
    options: ["3%", "10%", "5%", "2%"],
    answer: "3%",
  },
  {
    question:
      "Qual é a lei estadual pioneira no descarte adequado de lixos eletrônicos?",
    options: [
      "Lei estadual 13.576/2009",
      "Lei estadual 13.576/2006",
      "Lei estadual 13.579/2009",
      "Não tem lei",
    ],
    answer: "Lei estadual 13.576/2009",
  },
  {
    question: "Onde se deve descartar pilhas eletrônicas?",
    options: [
      "No lixo comum",
      "No quintal de casa",
      "Em pontos de coleta específicos ou em lojas que recebem pilhas usadas",
      "No vaso sanitário",
    ],
    answer:
      "Em pontos de coleta específicos ou em lojas que recebem pilhas usadas",
  },
  {
    question: "Quem é responsável pelo descarte correto de equipamentos eletrônicos?",
    options: [
      "Somente o governo",
      "Somente as empresas",
      "Todos: consumidores, empresas e governo",
      "Ninguém",
    ],
    answer: "Todos: consumidores, empresas e governo",
  },
  {
    question:
      "Qual é uma boa prática para reduzir a quantidade de lixo eletrônico?",
    options: [
      "Trocar de celular todo ano",
      "Fazer manutenção e prolongar o uso dos aparelhos",
      "Jogar fora quando riscar a tela",
      "Queimar os aparelhos velhos",
    ],
    answer: "Fazer manutenção e prolongar o uso dos aparelhos",
  },
  {
    question:
      "Qual das alternativas representa uma prática sustentável na gestão de resíduos eletrônicos em larga escala?",
    options: [
      "Incentivar o descarte em lixões controlados",
      "Promover centros de recondicionamento e reuso de equipamentos eletrônicos",
      "Substituir equipamentos sem considerar sua vida útil",
      "Exportar resíduos para países com reciclagem mais barata",
    ],
    answer:
      "Promover centros de recondicionamento e reuso de equipamentos eletrônicos",
  },
];
