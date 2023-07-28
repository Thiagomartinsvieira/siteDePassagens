import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';

function Footer(): JSX.Element {
  return (
    <div>
      <footer id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>Our Story</li>
              <li>Fleet History</li>
              <li>News</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Bus Tickets</h3>
            <ul>
              <li>Miniatures</li>
              <li>Bus Tickets</li>
              <li>Explore Our Fleet</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Payment Methods</h3>
            <ul>
              <img
                src="..\src\assets\img\footer\bandeiras.webp"
                alt="payment methods"
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
        <h3 className="footer-app">DOWNLOAD OUR APP</h3>
        <div className="footer-app-img">
          <img
            src="..\src\assets\img\footer\play-store.svg"
            alt="Google Play Store"
          />
          <img
            src="..\src\assets\img\footer\store-apple.svg"
            alt="Apple Store Apps"
          />
        </div>
        <hr />
        <br />
        <p className="footer-text">
          2023 - AUTO VIEIRA - Fictional Transportation Company - Developed by Thiago Martins
        </p>
      </footer>
    </div>
  );
}

export default Footer;
