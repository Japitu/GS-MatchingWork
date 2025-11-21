import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo-MW.png';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Membros', path: '/membros' },
  { name: 'Contato', path: '/contato' },
  { name: 'Sobre', path: '/sobre' }
];

const Header = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-blue-950 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        <div className="flex items-center">
          <Link to="/" aria-label="Ir para a página inicial">
            <img src={Logo} alt="Logo" className="pl-4 h-12 w-auto mr-2" />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `text-white hover:text-yellow-200 text-lg transition-colors ${
                  isActive ? 'font-bold underline' : ''
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/Login"
            className="bg-white text-indigo-600 border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-gray-300 hover:border-gray-400 transition duration-200 text-base"
          >
            Login
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link 
            to="/Login" 
            className="bg-white border-solid border-2 border-indigo-600 px-3 py-1.5 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 text-xs sm:text-sm"
          >
            Login
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:bg-blue-600 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-600 border-t border-blue-400">
          <div className="px-2 py-4 space-y-2">
            {navItems.map(({name, path}) => (
              <NavLink 
                key={name}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 text-white hover:bg-blue-700 rounded transition-colors duration-300 ${
                    isActive ? 'bg-blue-700 font-bold' : ''
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
      
    </header>
  );
};

export default Header;
