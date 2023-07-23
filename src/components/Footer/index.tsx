import './footer.css';

function Footer(): JSX.Element {
  return (
    <div>
      <footer id="footercintent">
        <div className="container px-5">
          <div className="row justify-content-between">
            <div className="footer-column col-12 col-md-auto mb-3 mb-md-0 p-auto p-md-0">
              <a href="https://www.nspenha.com.br/home" className="logo">
                <img
                  src="https://www.nspenha.com.br/on/demandware.static/-/Sites/default/dw311ea751/Institucionais/logo-penha.png"
                  alt="Penha"
                  className="img-logo-footer"
                ></img>
              </a>
              <p className="footer-text-small pr-3">
                R. Jackson Figueiredo, 120
                <br />
                Parolin - Curitiba / PR
                <br />
                CEP - 81030-050
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
