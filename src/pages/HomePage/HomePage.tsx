import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-800">
      {/* Hero */}
      <section className="bg-blue-100 w-full py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Conecte Habilidades a Oportunidades!</h1>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Nosso sistema usa tecnologia de ponta para unir profissionais a empresas ideais, valorizando seu real talento.
        </p>
        <Link
          to="/cadastro"
          className="bg-white text-blue-700 py-3 px-8 rounded-full font-bold border border-blue-200 hover:bg-blue-50 transition"
        >
          Comece Agora
        </Link>
      </section>

      {/* Como Funciona */}
      <section className="max-w-5xl mx-auto my-16 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold mb-2">1. Cadastre-se</h3>
            <p>Crie seu perfil e informe suas principais habilidades.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold mb-2">2. Análise Precisa</h3>
            <p>Com o nosso sistema iremos conecta-lo aos projetos mais compativeis</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold mb-2">3. Conecte-se</h3>
            <p>Veja empresas que valorizam seu talento.</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
