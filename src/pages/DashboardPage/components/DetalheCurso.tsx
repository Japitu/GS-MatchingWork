import { useState } from 'react';
import useTheme from "../../../contexts/ThemeContext/useTheme"; // Se quiser pegar theme

const empresas = [
  {
    nome: 'Tech Solutions',
    descricao: 'Empresa de tecnologia focada em soluções para o varejo digital.',
    projetos: [
      'Sistema de recomendação para e-commerce',
      'Plataforma de Inteligência de Dados',
    ],
    habilidades: ['React', 'Python', 'Machine Learning'],
  },
  {
    nome: 'StartUp X',
    descricao: 'Startup inovadora no segmento de logística urbana.',
    projetos: [
      'App de entregas last mile',
      'Dashboard para análise de rotas',
    ],
    habilidades: ['Node.js', 'React Native', 'UX/UI'],
  },
];

const CursoDetalhe = () => {
  const [selected] = useState(0);
  const empresa = empresas[selected];
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  

  return (
    <div className={`flex flex-col md:flex-row min-h-screen
      ${darkMode ? "bg-gray-900" : "bg-slate-50"}
      `}
    >
      <main className="flex-1 md:px-12 p-6">
        <h1 className={`text-3xl font-bold mb-4  ${darkMode ? "text-blue-200" : "text-blue-900"}`}>
          {empresa.nome}
        </h1>
        <div className="mb-6">
          <h3 className={`"font-semibold text-lg mb-2 ${darkMode ? "text-gray-100" : "text-blue-900"}`}>Descrição da empresa</h3>
          <p className={`mb-3  ${darkMode ? "text-gray-300" : ""}`}>{empresa.descricao}</p>
        </div>
        <div>
          <h3 className={`font-semibold text-lg mb-2 ${darkMode ? "text-gray-100" : ""}`}>Projetos/Ideias</h3>
          <ul className={`list-disc list-inside ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            {empresa.projetos.map((proj) => (
              <li key={proj}>{proj}</li>
            ))}
          </ul>
        </div>
      </main>

      <aside className="w-full md:w-2/6 p-6">
        <div className={`rounded-3xl shadow-2xl border p-6 flex flex-col gap-6 sticky top-8
          ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}
        `}>
          <button className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition
            ${darkMode 
              ? "bg-linear-to-r from-blue-800 to-blue-900 text-blue-100 hover:from-blue-700 hover:to-blue-800"
              : "bg-linear-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"}
          `}>
            Inscrever-se
          </button>
          <div className={`rounded-2xl p-4 shadow-sm
             ${darkMode ? "bg-gray-700" : "bg-gray-50"} `}
          >
            <h4 className={`${darkMode ? "text-blue-300" : "text-blue-700"} font-semibold mb-3 text-lg flex items-center gap-2`}>
              <div className={`w-3 h-3 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-700"}`}></div>
              Habilidades Necessárias
            </h4>
            <ul className="flex flex-wrap gap-2">
              {empresa.habilidades.map((hab) => (
                <li
                  key={hab}
                  className={`px-3 py-1 font-semibold shadow-sm border text-sm rounded-full
                  ${darkMode
                    ? "bg-blue-950 text-blue-100 border-blue-900"
                    : "bg-blue-50 text-blue-800 border-blue-100"}
                  `}
                >
                  {hab}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CursoDetalhe;
