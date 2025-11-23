import { useState, useEffect } from "react";
import useTheme from "../../../contexts/ThemeContext/useTheme";

interface Curso {
  id: number;
  nome: string;
  descricao: string;
  idHabilidade: number;
}

const API_URL = import.meta.env.VITE_API_URL;

const VerCurso = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/curso`)
      .then(res => res.json())
      .then(data => setCursos(data))
      .catch(err => console.log("Erro ao carregar cursos:", err));
  }, []);

  return (
    <div className={`max-w-5xl mx-auto p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50"} rounded-lg shadow`}>
      <h2 className="text-2xl font-semibold mb-6">Cursos</h2>
      <table className={`min-w-full border-collapse border ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
        <thead>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>Nome</th>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>Descrição</th>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>ID Habilidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id} className={`${darkMode ? "odd:bg-gray-800 even:bg-gray-700" : "odd:bg-white even:bg-gray-100"}`}>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1`}>{curso.nome}</td>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1`}>{curso.descricao}</td>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1`}>{curso.idHabilidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerCurso;
