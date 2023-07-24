import './destinations.css';

function Destinations(): JSX.Element {
  const destinations = [
    {
      city: 'Sao Paulo',
      price: 'R$68,25',
      image: 'src/assets/img/destinations/SP.webp',
    },
    {
      city: 'Natal',
      price: 'R$573,63',
      image: 'src/assets/img/destinations/natal.webp',
    },
    {
      city: 'Salvador',
      price: 'R$355,00',
      image: 'src/assets/img/destinations/salvador.webp',
    },
    {
      city: 'Rio de Janeiro',
      price: 'R$150',
      image: 'src/assets/img/destinations/rio-de-janeiro.webp',
    },
    {
      city: 'Campos do Jordao',
      price: 'R$52,85',
      image: 'src/assets/img/destinations/campos-jordao.webp',
    },
    {
      city: 'Fortaleza',
      price: 'R$735,99',
      image: 'src/assets/img/destinations/fortaleza.webp',
    },

    {
      city: 'Maceio',
      price: 'R$477,87',
      image: 'src/assets/img/destinations/maceio.webp',
    },
    {
      city: 'Recife',
      price: 'R$541,50',
      image: 'src/assets/img/destinations/recife.webp',
    },
    {
      city: 'Porto Alegre',
      price: 'R$309,10',
      image: 'src/assets/img/destinations/porto-alegre.webp',
    },
  ];

  return (
    <div className="destinations-container">
      <section id="destinations" className="destinations">
        <div className="header-container">
          <h2 className="destinations-h2">Most searched bus tickets</h2>
          <button>see more</button>
        </div>
        <div className="grid-container-wrapper">
          <div className="grid-container">
            {destinations.map((destination, index) => (
              <div key={index} className="destination-wrapper">
                <img
                  className="destination"
                  src={destination.image}
                  alt={destination.city}
                />
                <div className="destination-overlay">
                  <p className="destination-price">{destination.price}</p>
                  <p className="destination-info">{destination.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinations;
