import { useState, useEffect } from "react";
import useTheme from "../../../contexts/ThemeContext/useTheme";

interface Curso {
  id: number;
  nome: string;
  descricao: string;
  habilidadeId: number;
}

const API_URL = import.meta.env.VITE_API_URL;

const Cursos = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [form, setForm] = useState<Omit<Curso, "id">>({ nome: "", descricao: "", habilidadeId: 0 });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/curso`)
      .then(res => res.json())
      .then(data => setCursos(data))
      .catch(err => console.log("Erro ao carregar cursos:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      nome: form.nome,
      descricao: form.descricao,
      idHabilidade: Number(form.habilidadeId)
    };

    if (editingId !== null) {
      const res = await fetch(`${API_URL}/curso/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const atualizado = await res.json();
      setCursos(cursos.map(c => c.id === editingId ? atualizado : c));
      setEditingId(null);
    } else {
      const res = await fetch(`${API_URL}/curso`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const criado = await res.json();
      setCursos([...cursos, criado]);
      console.table(cursos);
    }
    setForm({ nome: "", descricao: "", habilidadeId: 0 });
  };

  const handleEdit = (curso: Curso) => {
    setForm({ nome: curso.nome, descricao: curso.descricao, habilidadeId: curso.habilidadeId });
    setEditingId(curso.id);
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/curso/${id}`, { method: "DELETE" });
    setCursos(cursos.filter(c => c.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ nome: "", descricao: "", habilidadeId: 0 });
    }
  };

  return (
    <div className={`max-w-5xl mx-auto p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50"} rounded-lg shadow`}>
      <h2 className="text-2xl font-semibold mb-6">Cursos</h2>
      <form onSubmit={handleSave} className="mb-6 flex gap-4 flex-wrap items-end">
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
          className="px-3 py-2 rounded border"
          required
        />
        <input
          type="text"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          className="px-3 py-2 rounded border"
          required
        />
        <input
          type="number"
          name="habilidadeId"
          value={form.habilidadeId}
          onChange={handleChange}
          placeholder="ID da Habilidade"
          className="px-3 py-2 rounded border"
          required
          min={1}
        />
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
          {editingId !== null ? "Salvar Edição" : "Cadastrar"}
        </button>
        {editingId !== null && (
          <button type="button" onClick={() => {setEditingId(null); setForm({ nome: "", descricao: "", habilidadeId: 0 });}} className="px-4 py-2 rounded bg-gray-400 text-white">
            Cancelar
          </button>
        )}
      </form>
      <table className={`min-w-full border-collapse border ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
        <thead>
          <tr className={`${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>Nome</th>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>Descrição</th>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>ID Habilidade</th>
            <th className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1.5 text-left`}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id} className={`${darkMode ? "odd:bg-gray-800 even:bg-gray-700" : "odd:bg-white even:bg-gray-100"}`}>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1`}>{curso.nome}</td>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1`}>{curso.descricao}</td>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1`}>{curso.habilidadeId}</td>
              <td className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} px-4 py-1 flex gap-2`}>
                <button onClick={() => handleEdit(curso)} className={`text-blue-600 hover:underline`}>Editar</button>
                <button onClick={() => handleDelete(curso.id)} className={`text-red-600 hover:underline`}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cursos;
