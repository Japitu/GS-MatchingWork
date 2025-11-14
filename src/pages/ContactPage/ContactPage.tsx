import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  descricao: string;
}

type MessageType = 'success' | 'error' | 'info';

interface NotificationState {
  show: boolean;
  message: string;
  type: MessageType;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    descricao: ''
  });
  
  const [clientFormsData ,setClientFormsData] = useState<FormData[]> ([])

  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: '',
    type: 'success'
  });
  
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const showNotification = (message: string, type: MessageType = 'success') => {
    setNotification({
      show: true,
      message,
      type
    });
    
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setClientFormsData(prevDados => [...prevDados, formData]);
    console.table(clientFormsData);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        assunto: '',
        descricao: ''
      });
      
      showNotification('Formulário enviado com sucesso! Entraremos em contato em breve.', 'success');
      setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 xs:py-10 sm:py-12 px-2 xs:px-4 sm:px-6">
      {notification.show && (
        <div className={`fixed top-4 right-2 xs:right-4 z-50 px-4 xs:px-6 py-3 rounded-lg shadow-lg animate-fade-in max-w-xs xs:max-w-sm ${
          notification.type === 'success' 
            ? 'bg-green-600 text-white' 
            : notification.type === 'error'
            ? 'bg-red-600 text-white'
            : 'bg-blue-600 text-white'
        }`}>
          <div className="flex items-start">
            {notification.type === 'success' && (
              <svg className="w-5 h-5 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {notification.type === 'error' && (
              <svg className="w-5 h-5 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <p className="text-sm xs:text-base">{notification.message}</p>
          </div>
        </div>
      )}

      <div className="text-center mb-6 xs:mb-8">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Entre em Contato
        </h2>
        <p className="text-sm xs:text-base text-gray-600">
          Estamos aqui para ajudar. Preencha o formulário abaixo e retornaremos em breve.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 xs:p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6 mb-6">
          
          {/* Nome */}
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

          {/* Telefone */}
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

        {/* Email */}
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

        {/* Assunto */}
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

        {/* Descrição */}
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

        {/* Botão Enviar */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 xs:px-8 py-2 xs:py-3 bg-blue-600 text-white rounded-lg text-sm xs:text-base font-semibold transition-colors duration-300 transform hover:scale-105 ${
              loading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;