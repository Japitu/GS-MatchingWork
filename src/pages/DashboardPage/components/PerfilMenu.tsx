import { useState } from "react";
import imgPerfil from "../assets/PerfilPadrao.jpg";

type Props = {
  onLogout: () => void;
  userImgUrl?: string;
};

const PerfilMenu: React.FC<Props> = ({
  onLogout,
  userImgUrl,
}) => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Simulação temporária

  const defaultImg = userImgUrl || imgPerfil;

  return (
    <div className="relative flex justify-between items-center gap-2">
      <div className="flex items-center gap-2.5">
        <img
          src={defaultImg}
          alt="Perfil"
          className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 object-cover"
        />
        <span>Username</span>
      </div>
      <button
        className="p-1.5 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu de opções"
      >
        <svg height={24} width={24} viewBox="0 0 24 24" className="fill-gray-700">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 bottom-full mb-4 z-50 w-56 bg-white rounded rounded-xl shadow-lg py-3 px-4 flex flex-col border border-gray-100">
          {/* Linha modo claro/escuro + toggle */}
          <div className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-blue-50" onClick={() => setDarkMode((val) => !val)}>
            <span className="text-blue-800 font-medium text-base" >
              Modo Escuro
            </span>
            <button
              type="button"
              aria-checked={darkMode}
              role="switch"
              className={`relative ml-2 w-10 h-5 rounded-full transition cursor-pointer focus:outline-none ${
                darkMode ? "bg-blue-700" : "bg-gray-300"
              }`}
              
              style={{ minWidth: 40, minHeight: 20, padding: 0 }}
            >
              <span
                className={`absolute left-1 top-1 h-3 w-3 rounded-full bg-white shadow transition-transform ${
                  darkMode ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>


          <button
            className="text-left px-4 py-2 hover:bg-red-50 text-red-700 cursor-pointer font-medium rounded"
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
};

export default PerfilMenu;
