import React, { useState } from "react";
import useTheme from "../../contexts/ThemeContext/useTheme";
import BACKGROUND_IMAGE_URL from "../../assets/Login-bg.jpg"
import LOGO_IMAGE_URL from "../../assets/Logo-MW.png";
import { Link } from "react-router";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!login || !senha) {
      setError("Preencha ambos os campos para continuar!");
      return;
    }
    // Aqui você chama sua API de login
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors
        ${darkMode ? "bg-gray-900" : "bg-blue-50"}`}
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`bg-white bg-opacity-90 dark:bg-gray-950 dark:bg-opacity-90
        rounded-3xl shadow-2xl p-8 w-full max-w-sm flex flex-col items-center
        border border-gray-100 dark:border-gray-800`}
      >
        {/* Logo centralizada */}
        <img src={LOGO_IMAGE_URL} alt="Logo" className="w-24 h-24 mb-6 drop-shadow-lg" />
        <h1 className="font-extrabold text-2xl text-blue-900 dark:text-blue-200 tracking-tight mb-2 text-center">
          Bem-vindo de volta!
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-7 text-center font-medium">
          Acesse sua conta para ver projetos, cursos e oportunidades.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          <input
            type="text"
            placeholder="Login ou E-mail"
            value={login}
            onChange={e => setLogin(e.target.value)}
            className={`px-4 py-3 rounded-lg border
              bg-gray-50 dark:bg-gray-800
              border-gray-300 dark:border-gray-600
              focus:ring-2 focus:ring-blue-600
              text-blue-900 dark:text-blue-100
              transition`}
            autoFocus
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            className={`px-4 py-3 rounded-lg border
              bg-gray-50 dark:bg-gray-800
              border-gray-300 dark:border-gray-600
              focus:ring-2 focus:ring-blue-600
              text-blue-900 dark:text-blue-100
              transition`}
            required
          />
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mb-2 text-sm text-center">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold uppercase tracking-wide px-6 py-3 rounded-xl shadow-lg transition w-full"
          >
            Entrar
          </button>
        </form>

        <div className="mt-5 flex flex-col items-center gap-2 w-full">
          <span className="text-sm text-gray-500 dark:text-gray-400">Entre como Admin para teste</span>
          <Link to="/dashboard" className="text-blue-700 dark:text-blue-400 font-semibold hover:underline text-sm">
            Acessar Teste
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
