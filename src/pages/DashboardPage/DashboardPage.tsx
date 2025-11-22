import { useState } from "react";
import { useNavigate } from "react-router";
import useTheme from "../../contexts/ThemeContext/useTheme";
import Project from "./components/Project";
import PerfilMenu from "./components/PerfilMenu";
import Cursos from "./components/Curso";


const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState('projeto');
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    }
    const { theme } = useTheme();
    const darkMode = theme === "dark";

  return (
    
    <div className="flex h-screen">
  
  {/* Sidebar aparece a partir do breakpoint sm (640px) */}
  <aside className="hidden sm:flex sm:flex-col sm:w-60 bg-blue-900 text-white p-6">
    <ul className="space-y-4 text-sm font-medium">
      <li
        className={`cursor-pointer ${selectedTab === 'projeto' ? 'font-bold underline' : 'hover:underline'}`}
        onClick={() => setSelectedTab('projeto')}
      >
        Projetos
      </li>
      <li
        className={`cursor-pointer ${selectedTab === 'curso' ? 'font-bold underline' : 'hover:underline'}`}
        onClick={() => setSelectedTab('curso')}
      >
        Cursos
      </li>
    </ul>

    <div className="mt-auto">
      <PerfilMenu onLogout={handleLogout} />
    </div>
  </aside>

  {/* Conteúdo principal */}
  <main className={`flex-1 p-8 min-h-screen bg-gray-100 ${darkMode ? 'bg-gray-900' : ''}`}>
    {selectedTab === 'projeto' && <Project />}
    {selectedTab === 'curso' && <Cursos />}
  </main>

  {/* Navbar inferior mobile fica visível até sm (640px) */}
  <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center p-4 bg-blue-900 text-white sm:hidden">
    <button
      className={`cursor-pointer ${selectedTab === 'projeto' ? 'font-bold underline' : 'hover:underline'}`}
      onClick={() => setSelectedTab('projeto')}
    >
      Projetos
    </button>
    <button
      className={`cursor-pointer ${selectedTab === 'curso' ? 'font-bold underline' : 'hover:underline'}`}
      onClick={() => setSelectedTab('curso')}
    >
      Cursos
    </button>
  </nav>
</div>
  );
}

export default DashboardPage