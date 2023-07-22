import { useState } from 'react';
import './nav.css';

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
        <h1>Auto Vieira</h1>
        <div className="nav-info">
          <span>0800 123 1234</span>
          <button>Central de ajuda</button>
        </div>
      </div>

      <nav className="navbar">
        <button
          className={`menu-toogle ${isMenuOpen ? 'open' : ''}`}
          onClick={handleMenuToggle}
          type="button"
        ></button>
        <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
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
