import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/react.svg';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Membros', path: '/membros' },
  { name: 'Contato', path: '/contato' },
  { name: 'Sobre', path: '/sobre' }
];

const Header = () => {
  return (
    <header className="w-full bg-blue-950 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        <div className="flex items-center">
          <Link to="/" aria-label="Ir para a página inicial">
            <img src={Logo} alt="Logo" className="h-12 w-auto mr-2" />
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
            className="bg-white text-amber-700 border-2 border-white rounded-full px-6 py-2 font-semibold hover:bg-yellow-100 hover:border-yellow-300 transition duration-200 text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
