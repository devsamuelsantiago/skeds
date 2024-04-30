import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";
import { Task } from "./components/task";

const tasks = [
  {
    title: "Tarefa de história",
    creator: "Prof.ª Eliane",
    dueDate: new Date(2024, new Date().getMonth(), 5), // 5 de Maio
    createdAt: new Date(2024, 4, 1), // Criado em 1 de Maio
    groups: ["3 EM"],
    tags: ["História"],
    files: [],
    content:
      "Tarefa de história destinada aos alunos do 3º ano do ensino médio, cujo o objetivo é aprender mais sobre a história do Japão e seu contexto socioeconômico.",
  },
  {
    title: "Trabalho de Matemática",
    creator: "Prof. Carlos",
    dueDate: new Date(2024, new Date().getMonth(), 10), // 10 de Maio
    createdAt: new Date(2024, 4, 2), // Criado em 2 de Maio
    groups: ["2 EM"],
    tags: ["Matemática"],
    files: [],
    content: "Resolver uma série de exercícios sobre funções quadráticas.",
  },
  {
    title: "Relatório de Ciências",
    creator: "Prof.ª Marta",
    dueDate: new Date(2024, new Date().getMonth(), 15), // 15 de Maio
    createdAt: new Date(2024, 4, 3), // Criado em 3 de Maio
    groups: ["1 EM"],
    tags: ["Ciências"],
    files: [],
    content:
      "Elaborar um relatório sobre os resultados do experimento de química feito em laboratório.",
  },
  {
    title: "Ensaio de Português",
    creator: "Prof.ª Helena",
    dueDate: new Date(2024, new Date().getMonth(), 20), // 20 de Maio
    createdAt: new Date(2024, 4, 5), // Criado em 5 de Maio
    groups: ["3 EM"],
    tags: ["Português"],
    files: [],
    content:
      "Escrever um ensaio crítico sobre 'Memórias Póstumas de Brás Cubas', destacando as principais correntes filosóficas presentes na obra.",
  },
  {
    title: "Projeto de Arte",
    creator: "Prof.ª Lígia",
    dueDate: new Date(2024, new Date().getMonth(), 25), // 25 de Maio
    createdAt: new Date(2024, 4, 6), // Criado em 6 de Maio
    groups: ["2 EM"],
    tags: ["Arte"],
    files: [],
    content:
      "Criar uma composição artística baseada nas técnicas estudadas de pintura surrealista.",
  },
  {
    title: "Pesquisa de Geografia",
    creator: "Prof. Roberto",
    dueDate: new Date(2024, new Date().getMonth(), 30), // 30 de Maio
    createdAt: new Date(2024, 4, 7), // Criado em 7 de Maio
    groups: ["1 EM"],
    tags: ["Geografia"],
    files: [],
    content:
      "Realizar uma pesquisa sobre os impactos das mudanças climáticas nos diferentes continentes.",
  },
];

export function TasksView() {
  return (
    <main className="flex flex-1 flex-row p-3 gap-3 h-screen">
      <div className="bg-background rounded-md h-full">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-scroll overflow-x-hidden">
        <Header />
        <div className="flex flex-1 items-center justify-center flex-col gap-8 px-16 pb-16">
          <div className="flex flex-1 flex-col items-center justify-start w-full gap-4">
            {tasks.map((task, i) => {
              return <Task key={i} data={task} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
