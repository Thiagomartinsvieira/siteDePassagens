import './destinations.css';

function Destinations(): JSX.Element {
  return (
    <div>
      <section id="destinations" className="destinations">
        <div className="header-container">
          <h2 className="destinations-h2">Most searched bus tickets</h2>
          <button>see more</button>
        </div>
        <div className="grid-container-wrapper">
          <div className="grid-container">
            <img
              className="destination"
              src="src/assets/img/destinations/SP.webp"
              alt="Sao Paulo"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/natal.webp"
              alt="Natal"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/salvador.webp"
              alt="Salvador"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/rio-de-janeiro.webp"
              alt="Rio de Janeiro"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/maceio.webp"
              alt="Maceio"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/campos-jordao.webp"
              alt="Campos do jordao"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/recife.webp"
              alt="Recife"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/porto-alegre.webp"
              alt="Porto Alegre"
            />
            <img
              className="destination"
              src="src/assets/img/destinations/fortaleza.webp"
              alt="Fortaleza"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;
