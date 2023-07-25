import { useState } from 'react';
import './nav.css';
import { FaBars } from 'react-icons/fa';

function Nav(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav">
      <div className="header-content">
        <div className="title-and-menu">
          <h1>Auto Vieira</h1>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={handleMenuToggle}
            type="button"
          >
            <FaBars />
          </button>
        </div>
        <div className="nav-info">
          <span>0800 123 1234</span>
          <button className="help">Central de ajuda</button>
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li>
            <a href="#" onClick={handleMenuLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMenuLinkClick}>
              Institucional
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMenuLinkClick}>
              Agências
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMenuLinkClick}>
              Aluguel de ônibus
            </a>
          </li>
          <li>
            <a href="#" onClick={handleMenuLinkClick}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
