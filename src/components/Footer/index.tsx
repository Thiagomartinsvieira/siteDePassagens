import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';

function Footer(): JSX.Element {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Institucional</h3>
            <ul>
              <li>Nossa história</li>
              <li>História da frota</li>
              <li>Notícias</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Passagens de Ônibus</h3>
            <ul>
              <li>Miniaturas</li>
              <li>Passagens de ônibus</li>
              <li>Conheça nossa frota</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Formas de Pagamento</h3>
            <ul>
              <img
                src="https://www.viacaoouroeprata.com.br/images/bandeiras_cartoeS_com_fundo.png"
                alt=""
              />
            </ul>
          </div>
        </div>

        <div className="social-media">
          <a href="#">
            <FaFacebook size={30} color="#1877F2" />
          </a>
          <a href="#">
            <FaInstagram size={30} color="#C13584" />
          </a>
          <a href="#">
            <FaYoutube size={30} color="#FF0000" />
          </a>
        </div>
        <h3 className="footer-app">BAIXE NOSSO APP</h3>
        <div className="footer-app-img">
          <img
            src="https://www.viacaocatedral.com.br/_next/static/media/storeGoogle.adf83fe7.svg"
            alt=""
          />
          <img
            src="https://www.viacaocatedral.com.br/_next/static/media/storeApple.ea26aaf2.svg"
            alt=""
          />
        </div>
        <hr />
        <br />
        <p className="footer-text">
          © 2023 - AUTO VIEIRA - Empresa de Transportes fictícia - Desenvolvido
          por Thiago Martins
        </p>
      </footer>
    </div>
  );
}

export default Footer;
