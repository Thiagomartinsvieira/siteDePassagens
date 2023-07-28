import { useState } from 'react';
import './nav.css';
import { FaBars } from 'react-icons/fa';

function Nav(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open'); // Add this line
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  const menuOptions = [
    { label: 'Home', href: '#', onClick: handleMenuLinkClick },
    {
      label: 'Destinations',
      href: '#destinations',
      onClick: handleMenuLinkClick,
    },
    {
      label: 'About Auto Vieira',
      href: '#benefits',
      onClick: handleMenuLinkClick,
    },
    { label: 'Contact', href: '#contact', onClick: handleMenuLinkClick },
    {
      label: 'Download our APP',
      href: '#footer',
      onClick: handleMenuLinkClick,
    },
  ];

  return (
    <header className="nav">
      <div className="header-content">
        <div className="title-and-menu">
          <a href="#home">
            <h1>Auto Vieira</h1>
          </a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={handleMenuToggle}
            type="button"
          >
            <span aria-label="Menu">
              <FaBars />
            </span>
          </button>
        </div>
        <div className="nav-info">
          <span>0800 123 1234</span>
          <button className="help">Help Center</button>
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          {menuOptions.map((option, index) => (
            <li key={index}>
              <a href={option.href} onClick={option.onClick}>
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
