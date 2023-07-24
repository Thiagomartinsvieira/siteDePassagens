import './contact.css';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Contact(): JSX.Element {
  return (
    <div>
      <section id="contact" className="contact">
        <h2>Auto viação vieira na midia</h2>
        <p>Se voce gostou do projeto e deseja conhecer outros</p>
        <div className="contact-logos">
          <a href="">
            <FiLinkedin size={25} color="#0A66C2" />
          </a>
          <a href="">
            <FiGithub size={25} color="#000000" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;