import { useState } from "react";
import { useNavigate } from "react-router";
import PerfilMenu from "./components/PerfilMenu";


const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState('projeto');
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
    }

  return (
    <div className="flex h-screen" >

      <nav className="w-60 bg-blue-900 flex flex-col justify-between h-full text-white p-6">
        <div>
          <ul className="space-y-4 text-sm font-medium">
            <li
              className={`cursor-pointer ${selectedTab === 'projeto' ? 'font-bold underline' : 'hover:underline'}`}
              onClick={() => setSelectedTab('projeto')}
            >
              Empresas
            </li>
            <li
              className={`cursor-pointer ${selectedTab === 'curso' ? 'font-bold underline' : 'hover:underline'}`}
              onClick={() => setSelectedTab('curso')}
            >
              Cursos
            </li>
          </ul>
        </div>

        <div>
          <PerfilMenu onLogout={handleLogout} />
        </div>
      </nav>

      <main className="grow p-8 bg-gray-100 min-h-screen">
        {selectedTab === 'projeto' /*&& 
            <Project />*/
        }
        {selectedTab === 'Curso' /*&& 
            <Curso />*/
        }
      </main>
    </div>
  );
  
}

export default DashboardPage