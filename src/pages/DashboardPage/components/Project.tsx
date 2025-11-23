import { useState, useEffect } from "react";
import useTheme from "../../../contexts/ThemeContext/useTheme";

type StatusProjeto = "Aberto" | "Agendado" | "Pendente" | "Concluido";

interface Empresa {
  id: number;
  nome: string;
  descricao: string;
  status: StatusProjeto;
}

const statusStyles: Record<StatusProjeto, string> = {
  Aberto: "bg-green-500 text-white",
  Agendado: "bg-blue-500 text-white",
  Pendente: "bg-yellow-500 text-black",
  Concluido: "bg-gray-400 text-white"
};

const API_URL = import.meta.env.VITE_API_URL;

const Project = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  // Carrega empresas ao iniciar
  useEffect(() => {
    const url = `${API_URL}/projeto`
    fetch(url)
      .then(res => res.json())
      .then(data => setEmpresas(data))
      .catch(err => console.log("Erro ao carregar empresas:", err));
  }, []);

  // Editar
  const handleEditar = (empresa: Empresa) => {
    setSelectedEmpresa(empresa);
    setModoEdicao(true);
  };

  // Excluir
  const handleExcluir = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setEmpresas(empresas.filter(e => e.id !== id));
    if (selectedEmpresa?.id === id) {
      setSelectedEmpresa(null);
      setModoEdicao(false);
    }
  };

  // Salvar
  const handleSalvar = async (empresa: Empresa) => {
    let resposta: Empresa;
    if (empresa.id) {
      // Atualizar existente
      const res = await fetch(`${API_URL}/${empresa.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empresa)
      });
      resposta = await res.json();
      setEmpresas(empresas.map(e => e.id === empresa.id ? resposta : e));
    } else {
      // Criar novo
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(empresa)
      });
      resposta = await res.json();
      setEmpresas([...empresas, resposta]);
    }
    setModoEdicao(false);
    setSelectedEmpresa(null);
  };

  return (
    <div className={`min-h-screen max-w-5xl mx-auto p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50"} `}>
      <h2 className="text-2xl font-semibold mb-6">Projetos / Empresas</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {empresas.map(emp => (
          <div key={emp.id} className={`p-4 rounded shadow flex flex-col justify-between border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
            <div className="flex items-center justify-between mb-1 gap-2">
              <h3 className={`font-bold text-lg ${darkMode ? "text-blue-200" : ""}`}>{emp.nome}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[emp.status] ?? "bg-gray-300 text-black"}`}>
                {emp.status}
              </span>
            </div>
            <p className={`${darkMode ? "text-gray-300" : " text-gray-600"}`}>{emp.descricao}</p>
            <div className="mt-4 flex justify-between">
              <button onClick={() => handleEditar(emp)} className={`cursor-pointer ${darkMode ? "text-blue-300": "text-blue-600"} hover:underline`}>
                Editar
              </button>
              <button onClick={() => handleExcluir(emp.id)} className={`cursor-pointer ${darkMode ? "text-red-400": "text-red-600"} hover:underline`}>
                Excluir
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setSelectedEmpresa({ id: 0, nome: "", descricao: "", status: "Aberto" });
            setModoEdicao(true);
          }}
          className={`border-dashed border-2 cursor-pointer
            ${darkMode ? "border-gray-500 text-gray-300 hover:bg-gray-950" : "border-gray-400 text-gray-500 hover:bg-gray-100"}
            rounded flex items-center justify-center text-lg`}
          style={{ height: "150px" }}
        >
          + Criar Novo
        </button>
      </div>
      {modoEdicao && selectedEmpresa && (
        <FormEmpresa empresa={selectedEmpresa} onSalvar={handleSalvar} onCancelar={() => setModoEdicao(false)} />
      )}
    </div>
  );
};

// Formulário
interface FormProps {
  empresa: Empresa;
  onSalvar: (empresa: Empresa) => void;
  onCancelar: () => void;
}

function FormEmpresa({ empresa, onSalvar, onCancelar }: FormProps) {
  const [nome, setNome] = useState(empresa.nome);
  const [descricao, setDescricao] = useState(empresa.descricao);
  const [status, setStatus] = useState<StatusProjeto>(empresa.status);
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSalvar({ ...empresa, nome, descricao, status });
  };

  return (
    <form onSubmit={handleSubmit} className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded shadow max-w-md mx-auto`}>
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-blue-200" : ""}`}>
        {empresa.id ? "Editar Empresa" : "Nova Empresa"}
      </h3>
      <div className="mb-4">
        <label className={`block mb-1 font-medium ${darkMode ? "text-gray-300" : ""}`}>Nome</label>
        <input type="text"
          className={`w-full border rounded px-3 py-2 ${darkMode ? "bg-gray-900 text-gray-100 border-gray-600" : "bg-gray-50 text-gray-900 border-gray-300"}`}
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className={`block mb-1 font-medium ${darkMode ? "text-gray-300" : ""}`}>Descrição</label>
        <textarea
          className={`w-full border rounded px-3 py-2 ${darkMode ? "bg-gray-900 text-gray-100 border-gray-600" : "bg-gray-50 text-gray-900 border-gray-300"}`}
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          rows={3}
        />
      </div>
      <div className="mb-4">
        <label className={`block mb-1 font-medium ${darkMode ? "text-gray-300" : ""}`}>Status</label>
        <select
          className={`w-full border rounded px-3 py-2 ${darkMode ? "bg-gray-900 text-gray-100 border-gray-600" : "bg-gray-50 text-gray-900 border-gray-300"}`}
          value={status}
          onChange={e => setStatus(e.target.value as StatusProjeto)}
        >
          <option value="Aberto">Aberto</option>
          <option value="Agendado">Agendado</option>
          <option value="Pendente">Pendente</option>
          <option value="Concluido">Concluido</option>
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button"
          onClick={onCancelar}
          className={`px-4 py-2 rounded border cursor-pointer ${darkMode ? "text-gray-300 border-gray-600" : "text-gray-700 border-gray-400"}`}>
          Cancelar
        </button>
        <button type="submit"
          className={`px-4 py-2 rounded text-white cursor-pointer ${darkMode ? "bg-blue-800" : "bg-blue-600"}`}>
          Salvar
        </button>
      </div>
    </form>
  );
}

export default Project;
