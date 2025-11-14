import { useState, type ChangeEvent } from 'react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  descricao: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    descricao: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 xs:py-10 sm:py-12 px-2 xs:px-4 sm:px-6">
      
      <div className="text-center mb-6 xs:mb-8">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Entre em Contato
        </h2>
        <p className="text-sm xs:text-base text-gray-600">
          Estamos aqui para ajudar. Preencha o formulário abaixo e retornaremos em breve.
        </p>
      </div>

      <form className="bg-white rounded-lg shadow-lg p-4 xs:p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-6">
          
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="seu@email.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
            Assunto *
          </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="Assunto da mensagem"
            />
        </div>

        <div className="mb-6">
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
            Descrição *
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical"
            placeholder="Descreva sua necessidade..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`px-6 xs:px-8 py-2 xs:py-3 bg-blue-600 text-white rounded-lg text-sm xs:text-base font-semibold transition-colors duration-300 transform hover:scale-105`}
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;