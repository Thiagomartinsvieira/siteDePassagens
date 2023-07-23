import './destinations.css';

function Destinations(): JSX.Element {
  return (
    <div>
      <section id="destinations" className="destinations">
        <h2 className="destinations-h2">Passagens de ônibus mais buscadas</h2>
        <div className="grid-container-wrapper">
          <div className="grid-container">
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/Sampa.jpg"
              alt="Sao Paulo"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/salvador.jpg"
              alt="Salvador"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/brasilia.jpg"
              alt="Brasilia"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/natal.jpg"
              alt="Natal"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/bh.jpg"
              alt="Belo Horizonte"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/recife.jpg"
              alt="Recife"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/portoAlegre.jpg"
              alt="Porto Alegre"
            />
            <img
              className="destination"
              src="https://site-de-passagens.vercel.app/img/fortaleza.jpg"
              alt="Fortaleza"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;
