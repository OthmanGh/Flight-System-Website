const flightsInfosContainer = document.getElementById('flights-infos-container');
const addFlightBtn = document.getElementById('add-flight-btn');
const path = 'http://localhost/Flight-System-Website/server/admin/flights';
const form = document.getElementById('form');
const destination = document.getElementById('destination');
const airline = document.getElementById('airline');
const price = document.getElementById('price');
const departureDate = document.getElementById('departure-date');
const departureAirport = document.getElementById('departure-airport');
const arrivalAirport = document.getElementById('arrival-airport');
const arrivalDate = document.getElementById('arrival-date');

const flightComponent = ({
  flight_id,
  destination,
  departure_date,
  arrival_date,
  departure_airport,
  airline,
  arrival_airport,
  price,
}) => `<tr class="flights-info">
  <td class="flight-number">${flight_id}</td>
  <td>${destination}</td>
  <td>${airline}</td>
  <td>${departure_date}</td>
  <td>${arrival_date}</td>
  <td>${departure_airport}</td>
  <td>${arrival_airport}</td>
  <td>${price}</td>

  <td class="edit-flight">
    <img class="edit-btn" id="edit-btn" alt="edit logo" src="http://localhost/Flight-System-Website/client/assets/edit.svg" />
  </td>
  <td class="delete-flight">
    <img class="delete-btn" id="delete-btn" alt="trash logo" src="http://localhost/Flight-System-Website/client/assets/trash.svg" />
  </td>
</tr>`;

const renderFlightsInfos = ({ status, flights }) => {
  flightsInfosContainer.innerHTML = '';

  flights.forEach((flight) => {
    flightsInfosContainer.innerHTML += flightComponent(flight);
  });
};

const deleteFlight = async (flightId) => {
  try {
    const url = `${path}/delete.php?flight_id=${flightId}`;
    const response = await fetch(url);
    const infos = await response.json();
    renderFlightsInfos(infos);
  } catch (error) {
    console.error('Error deleting flight:', error);
  }
};

const readFlights = async () => {
  const url = `${path}/read.php`;
  try {
    const response = await fetch(url);
    const infos = await response.json();
    renderFlightsInfos(infos);
  } catch (error) {
    console.error('Error reading flights:', error);
  }
};

const createFlights = () => {
  const url = `${path}/create.php`;
  const formatData = new FormData();

  formatData.append('destination', destination.value);
  formatData.append('airline', airline.value);
  formatData.append('price', price.value);
  formatData.append('departure_date', departureDate.value);
  formatData.append('departure_airport', departureAirport.value);
  formatData.append('arrival_date', arrivalDate.value);
  formatData.append('arrival_airport', arrivalAirport.value);

  const options = {
    method: 'POST',
    body: formatData,
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then((infos) => {
      renderFlightsInfos(infos);
    })
    .catch((error) => {
      console.error('Error creating flights:', error);
    });
};

flightsInfosContainer.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const flightRow = e.target.closest('.flights-info'); // Selecting parent

    if (flightRow) {
      const flightId = flightRow.querySelector('.flight-number').textContent; // Searching down
      await deleteFlight(flightId);
    }
  }
});

readFlights();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createFlights();

  destination.value = '';
  airline.value = '';
  price.value = '';
  departureDate.value = '';
  departureAirport.value = '';
  arrivalDate.value = '';
  arrivalAirport.value = '';
});
