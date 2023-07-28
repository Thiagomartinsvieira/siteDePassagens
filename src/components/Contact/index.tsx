import './contact.css';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiVercel } from 'react-icons/si';

function Contact(): JSX.Element {
  return (
    <div>
      <section id="contact" className="contact">
        <h2>Auto Vieira in the Media</h2>

        <p>If you liked the project and want to see more:</p>
        <div className="contact-logos">
          <a
            href="https://www.linkedin.com/in/thiago-martins-vieira-074550192/"
            target="_blank"
          >
            <FiLinkedin size={25} color="#0A66C2" />
          </a>
          <a href="https://github.com/Thiagomartinsvieira" target="_blank">
            <FiGithub size={25} color="#000000" />
          </a>
          <a href="https://portfolio-plum-rho-75.vercel.app/" target="_blank">
            <SiVercel size={25} color="#000000" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
