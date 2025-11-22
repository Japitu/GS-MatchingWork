import { useState } from "react";
import useTheme from "../../../contexts/ThemeContext/useTheme";

interface Empresa {
  id: number;
  nome: string;
  descricao: string;
}

const empresasIniciais: Empresa[] = [
  { id: 1, nome: "Empresa A", descricao: "Descrição da Empresa A" },
  { id: 2, nome: "Empresa B", descricao: "Descrição da Empresa B" },
];


const Project = () => {
  const [empresas, setEmpresas] = useState(empresasIniciais);
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const handleEditar = (empresa: Empresa) => {
    setSelectedEmpresa(empresa);
    setModoEdicao(true);
  };

  const handleExcluir = (id: number) => {
    setEmpresas(empresas.filter(e => e.id !== id));
    if(selectedEmpresa?.id === id) {
      setSelectedEmpresa(null);
      setModoEdicao(false);
    }
  };

  const handleSalvar = (empresa: Empresa) => {
    if(empresa.id) {
      setEmpresas(empresas.map(e => e.id === empresa.id ? empresa : e));
    } else {
      empresa.id = empresas.length + 1;
      setEmpresas([...empresas, empresa]);
    }
    setModoEdicao(false);
    setSelectedEmpresa(null);
  };

  return (
  <div className={`max-w-5xl mx-auto p-6
    bg-gray-50 ${darkMode ? "bg-gray-900 text-gray-100" : ""}
  `}>
    <h2 className="text-2xl font-semibold mb-6">Projetos / Empresas</h2>
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      {empresas.map(emp => (
        <div key={emp.id}
          className={`p-4 rounded shadow flex flex-col justify-between
          border border-gray-100 ${darkMode ? "bg-gray-800 border-gray-700": "bg-white"}
          `}>
          <div>
            <h3 className={`font-bold text-lg ${darkMode ? "text-blue-200" : ""}`}>{emp.nome}</h3>
            <p className={`text-gray-600 ${darkMode ? "text-gray-300" : ""}`}>{emp.descricao}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={() => handleEditar(emp)}
              className={`"text-blue-600 cursor-pointer ${darkMode ? "text-blue-300": ""} hover:underline`}>
              Editar
            </button>
            <button onClick={() => handleExcluir(emp.id)}
              className={`text-red-600 cursor-pointer ${darkMode ? "text-red-400": ""} hover:underline`}>
              Excluir
            </button>
          </div>
        </div>
      ))}
      <button 
        onClick={() => {
          setSelectedEmpresa({ id: 0, nome: "", descricao: "" }); setModoEdicao(true);
        }}
        className={`border-dashed border-2 border-gray-400 cursor-pointer ${darkMode ? "border-gray-500 text-gray-300 hover:bg-gray-950": ""} rounded
          flex items-center justify-center text-gray-500 text-lg
          hover:bg-gray-100`}
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
}

interface FormProps {
  empresa: Empresa;
  onSalvar: (empresa: Empresa) => void;
  onCancelar: () => void;
}

function FormEmpresa({ empresa, onSalvar, onCancelar }: FormProps) {
  const [nome, setNome] = useState(empresa.nome);
  const [descricao, setDescricao] = useState(empresa.descricao);
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSalvar({ ...empresa, nome, descricao });
  };

  return (
    <form onSubmit={handleSubmit}
  className={` ${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded shadow max-w-md mx-auto"`}
>
  <h3 className={`"text-xl font-semibold mb-4 ${darkMode ? "text-blue-200" : ""} `}>
    {empresa.id ? "Editar Empresa" : "Nova Empresa"}
  </h3>
  <div className="mb-4">
    <label className={`block mb-1 font-medium ${darkMode ? "text-gray-300" : ""} `}>Nome</label>
    <input 
      type="text" 
      className={`w-full border rounded px-3 py-2 
         ${darkMode ? "bg-gray-900 text-gray-100 border-gray-600" : "bg-gray-50 text-gray-900 border-gray-300"}`}
      value={nome}
      onChange={e => setNome(e.target.value)}
      required
    />
  </div>
  <div className="mb-4">
    <label className={`block mb-1 font-medium ${darkMode ? "text-gray-300" : ""}`}>Descrição</label>
    <textarea 
      className={`w-full border rounded px-3 py-2 
         ${darkMode ? "bg-gray-900 text-gray-100 border-gray-600" : "bg-gray-50 text-gray-900 border-gray-300"}`}
      value={descricao}
      onChange={e => setDescricao(e.target.value)}
      rows={3}
    />
  </div>
  <div className="flex justify-end space-x-4">
    <button type="button"
      onClick={onCancelar}
      className={`px-4 py-2 rounded border cursor-pointer ${darkMode ? "text-gray-300 border-gray-600" : "text-gray-700 border-gray-400"}`}
    >
      Cancelar
    </button>
    <button type="submit"
      className={`px-4 py-2 rounded text-white cursor-pointer ${darkMode ? "bg-blue-800" : "bg-blue-600"}`} 
    >
      Salvar
    </button>
  </div>
</form>

  );
}

export default Project;