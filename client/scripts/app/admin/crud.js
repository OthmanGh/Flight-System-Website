const flightsInfosContainer = document.getElementById('flights-infos-container');
const path = 'http://localhost/Flight-System-Website/server/admin/flights';

const flightComponent = ({
  flight_id,
  destination,
  departure_date,
  arrival_date,
  departure_airport,
  airline_id,
  arrival_airport,
  price,
}) => `<tr class="flights-info">
  <td class="flight-number">${flight_id}</td>
  <td>${destination}</td>
  <td>${airline_id}</td>
  <td>${departure_date}</td>
  <td>${arrival_date}</td>
  <td>${departure_airport}</td>
  <td>${arrival_airport}</td>
  <td>${price}</td>

  <td class="edit-flight">
  <img class="edit-btn" id="edit-btn" alt="edit logo" src="http://localhost/Flight-System-Website/client/assets/edit.svg" />
  </td>
  <td  class="delete-flight">
  <img class="delete-btn" id="delete-btn"  alt="trash logo" src="http://localhost/Flight-System-Website/client/assets/trash.svg" />
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
  const response = await fetch(url);
  const infos = await response.json();

  console.log(infos);
  renderFlightsInfos(infos);
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
