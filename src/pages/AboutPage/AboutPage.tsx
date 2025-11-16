const valores = [
  "Inovação tecnológica e social",
  "Comunicação Clara e Feedback Construtivo",
  "Respeito à diversidade e ao potencial",
  "Crescimento sustentável para todos os usuários"
];

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-slate-50 text-gray-800 py-12 px-4 flex flex-col items-center">
            <section className="max-w-4xl w-full mb-12">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Sobre Nós</h1>
                <p className="text-lg text-center max-w-2xl mx-auto mb-2">
                Somos apaixonados por unir pessoas e empresas de forma inteligente, usando tecnologia para valorizar competências e facilitar grandes conexões.
                </p>
                <p className="text-md text-center max-w-2xl mx-auto text-gray-600">
                Nosso projeto surgiu da vontade de resolver o desafio de combinar talentos com oportunidades reais de mercado, promovendo impacto e desenvolvimento para indivíduos e organizações.
                </p>
            </section>

            <section className="max-w-4xl w-full flex flex-col items-center bg-blue-50 rounded-2xl shadow p-8 border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Nossas Ideias</h3>
                <p className="text-center text-gray-700">
                Acreditamos que tecnologia pode transformar o mercado de trabalho, criando conexões mais humanas e eficientes. Por isso, investimos em algoritmos de matching e ferramentas para evoluir as relações profissionais.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl w-full ">
                {/* Missão */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border border-gray-100">
                    <h2 className="font-bold text-blue-700 text-2xl mb-2">Missão</h2>
                    <p className="text-center text-gray-700">
                        Facilitar o encontro entre talentos e empresas, potencializando o crescimento profissional e a diversidade de experiências através de soluções digitais.
                    </p>
                </div>
                {/* Visão */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border border-gray-100">
                    <h2 className="font-bold text-blue-700 text-2xl mb-2">Visão</h2>
                    <p className="text-center text-gray-700">
                        Ser referência no Brasil em conectar profissionais e organizações por habilidades, gerando oportunidades justas e inovadoras para todos.
                    </p>
                </div>
                {/* Valores */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border border-gray-100">
                    <h2 className="font-bold text-blue-700 text-2xl mb-2">Valores</h2>
                    <ul className="list-inside list-disc text-gray-700 text-left mt-2">
                        {valores.map((valor) => (
                        <li key={valor} className="mb-2">{valor}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default AboutPage;