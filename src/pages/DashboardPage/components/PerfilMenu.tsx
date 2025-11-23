import { useState } from "react";
import imgPerfil from "../assets/PerfilPadrao.jpg";
import useTheme from "../../../contexts/ThemeContext/useTheme";

type Props = {
  onLogout: () => void;
  userImgUrl?: string;
};

const PerfilMenu: React.FC<Props> = ({
  onLogout,
  userImgUrl,
}) => {
  const [open, setOpen] = useState(false);
  const { theme, changeTheme } = useTheme();
  const darkMode = theme === "dark";


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
        className="p-1.5 rounded-full cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu de opções"
      >
        <svg height={24} width={24} viewBox="0 0 24 24" className="fill-gray-100 hover:fill-gray-400 transition">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 bottom-full mb-4 z-50 w-56 bg-white rounded-xl shadow-lg py-3 px-4 flex flex-col border border-gray-100">
          <label
            htmlFor="darkModeSwitch"
            className="flex items-center justify-between w-full mb-4 px-2 cursor-pointer select-none"
          >
            <span className="text-base font-medium text-blue-800">Modo Escuro</span>
            <span className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors
              ${darkMode ? "bg-blue-700" : "bg-gray-300"}
            `}>
              <input
                id="darkModeSwitch"
                type="checkbox"
                checked={darkMode}
                onChange={() => changeTheme(darkMode ? 'light' : 'dark')}
                className="sr-only"
              />
              <span
                className={`inline-block h-6 w-6 bg-white rounded-full shadow transform transition-transform
                  ${darkMode ? "translate-x-7" : "translate-x-1"}
                `}
                style={{ transition: "transform 0.2s" }}
              />
            </span>
          </label>

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
