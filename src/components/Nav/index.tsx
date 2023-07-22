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
  );
}

export default Nav;
