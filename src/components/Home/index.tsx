import './home.css';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

function Home(): JSX.Element {
  return (
    <div>
      <section id="home" className="home">
        <h2>Bus tickets with Vieira Bus Company</h2>
        <div>
          <form action="origemDestino" method="post" className="formulario">
            <div>
              <label htmlFor="origin">
                <FaLocationArrow size={20} color="#0088FF" />
              </label>
              <input
                type="text"
                name="origin"
                id="origin"
                placeholder="Origin"
              />
            </div>
            <div>
              <label htmlFor="destination">
                <FaSearchLocation size={25} color="#02FF20" />
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="Destination"
              />
            </div>

            <div>
              <label>
                <input type="radio" name="tripType" value="oneWay" />
                One Way
              </label>
              <label>
                <input type="radio" name="tripType" value="roundTrip" />
                Round Trip
              </label>
            </div>

            <div>
              <label htmlFor="departureDate">Departure Date</label>
              <input type="date" name="departureDate" id="departureDate" />

              <label htmlFor="returnDate">Return Date</label>
              <input type="date" name="returnDate" id="returnDate" />
            </div>
            <div>
              <label htmlFor="search">Search</label>
              <input className="Search" type="submit" value="🔍 Search" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
