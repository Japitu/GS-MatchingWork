import { useState } from "react";
import useTheme from "../../../contexts/ThemeContext/useTheme";

interface Curso {
  id: number;
  nome: string;
  descricao: string;
  duracao: string;
}

const cursosIniciais: Curso[] = [
  { id: 1, nome: "Curso React", descricao: "Fundamentos do React", duracao: "20h" },
  { id: 2, nome: "Curso TypeScript", descricao: "Aprenda TS", duracao: "15h" },
  { id: 3, nome: "Curso Tailwind", descricao: "Estilização moderna", duracao: "10h" },
];

const Cursos = () => {
    const { theme } = useTheme();
    const darkMode = theme === "dark";
    const [cursos, setCursos] = useState<Curso[]>(cursosIniciais);

  return (
    <div className={`max-w-5xl mx-auto p-6  ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50"} rounded-lg shadow`}>
      <h2 className="text-2xl font-semibold mb-6">Cursos</h2>
      <table className={`min-w-full border-collapse border  ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
        <thead>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
            <th className={`border  ${darkMode ? "border-gray-700" : "border-gray-300"} px-4 py-1.5 text-left`}>Nome</th>
            <th className={`border  ${darkMode ? "border-gray-700" : "border-gray-300"} px-4 py-1.5 text-left`}>Descrição</th>
            <th className={`border  ${darkMode ? "border-gray-700" : "border-gray-300"} px-4 py-1.5 text-left`}>Duração</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id} className={`${darkMode ? "odd:bg-gray-800 even:bg-gray-700" : "odd:bg-white even:bg-gray-100"}`}>
              <td className={`border ${darkMode ? "border-gray-700" : "border-gray-300"} px-4 py-1`}>{curso.nome}</td>
              <td className={`border ${darkMode ? "border-gray-700" : "border-gray-300"} px-4 py-1`}>{curso.descricao}</td>
              <td className={`border ${darkMode ? "border-gray-700" : "border-gray-300"} px-4 py-1`}>{curso.duracao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cursos;
