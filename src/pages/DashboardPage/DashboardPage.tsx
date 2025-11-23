import { useState } from "react";
import { useNavigate } from "react-router";
import useTheme from "../../contexts/ThemeContext/useTheme";
import Project from "./components/Project";
import PerfilMenu from "./components/PerfilMenu";
import Cursos from "./components/Curso";
import CursoDetalhe from "./components/DetalheCurso";

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState("projeto");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <div className="flex h-screen relative bg-gray-100 dark:bg-gray-900">
      
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-blue-900 rounded-lg text-white sm:hidden"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Abrir menu"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
        </svg>
      </button>

      <aside className="hidden sm:flex sm:flex-col sm:w-60 fixed left-0 top-0 h-screen bg-blue-900 text-white p-6 z-30">
        {/* Corporativo */}
        <h2 className="text-white font-bold mb-3">Corporativo</h2>
        <ul className="space-y-4 text-sm font-medium">
          <li
            className={`cursor-pointer ${selectedTab === "projeto" ? "font-bold underline" : "hover:underline"}`}
            onClick={() => setSelectedTab("projeto")}
          >
            Projetos
          </li>
          <li
            className={`cursor-pointer ${selectedTab === "curso" ? "font-bold underline" : "hover:underline"}`}
            onClick={() => setSelectedTab("curso")}
          >
            Cursos
          </li>
        </ul>
        {/* Usuario */}
        <h2 className="text-white font-bold mb-3 mt-4">Usuario</h2>
        <ul className="space-y-4 text-sm font-medium">
          <li
            className={`cursor-pointer ${selectedTab === "procurar" ? "font-bold underline" : "hover:underline"}`}
            onClick={() => setSelectedTab("procurar")}
          >
            Procurar Projetos
          </li>
          <li
            className={`cursor-pointer ${selectedTab === "detalhes" ? "font-bold underline" : "hover:underline"}`}
            onClick={() => setSelectedTab("detalhes")}
          >
            Detalhe Cursos
          </li>
        </ul>
        <div className="mt-auto">
          <PerfilMenu onLogout={handleLogout} />
        </div>
      </aside>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 sm:hidden "
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 bottom-0 w-64 bg-blue-900 text-white p-6 flex flex-col transition-transform transform translate-x-0"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white text-3xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >×</button>
            <h2 className="text-white font-bold mb-3">Corporativo</h2>
            <ul className="space-y-4 text-sm font-medium">
              <li
                className={`cursor-pointer ${selectedTab === "projeto" ? "font-bold underline" : "hover:underline"}`}
                onClick={() => { setSelectedTab("projeto"); setMobileMenuOpen(false); }}
              >
                Projetos
              </li>
            </ul>
            <h2 className="text-white font-bold mb-3 mt-4">Usuario</h2>
            <ul className="space-y-4 text-sm font-medium">
              <li
                className={`cursor-pointer ${selectedTab === "procurar" ? "font-bold underline" : "hover:underline"}`}
                onClick={() => { setSelectedTab("procurar"); setMobileMenuOpen(false); }}
              >
                Procurar Projetos
              </li>
              <li
                className={`cursor-pointer ${selectedTab === "curso" ? "font-bold underline" : "hover:underline"}`}
                onClick={() => { setSelectedTab("curso"); setMobileMenuOpen(false); }}
              >
                Cursos
              </li>
              <li
                className={`cursor-pointer ${selectedTab === "detalhes" ? "font-bold underline" : "hover:underline"}`}
                onClick={() => { setSelectedTab("detalhes"); setMobileMenuOpen(false); }}
              >
                Detalhe Cursos
              </li>
            </ul>
            <div className="mt-auto">
              <PerfilMenu onLogout={handleLogout} />
            </div>
          </aside>
        </div>
      )}

      {/* Conteúdo principal */}
      <main className={`flex-1 p-8 min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} sm:ml-60`}>
        {selectedTab === "projeto" && <Project />}
        {selectedTab === "curso" && <Cursos />}
        {selectedTab === "detalhes" && <CursoDetalhe />}
        {selectedTab === "procurar" /* && componente... */}
      </main>
    </div>
  );
};

export default DashboardPage;
