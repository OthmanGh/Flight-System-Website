const flightsInfosContainer = document.getElementById('flights-infos-container');
const path = 'http://localhost/Flight-System-Website/server/admin/flights';

const getFlightsInfos = async () => {
  const url = `${path}/read.php`;
  const response = await fetch(url);
  const infos = await response.json();
  console.log(infos);

  renderFlightsInfos(infos);
};

const renderFlightsInfos = ({ status, flights }) => {
  flightsInfosContainer.innerHTML = '';

  flights.forEach((flight) => {
    flightsInfosContainer.innerHTML += flightComponent(flight);
  });
};

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
<td id="delete-flight">
<img alt="edit logo" src="http://localhost/Flight-System-Website/client/assets/edit.svg" />
</td>
<td class="edit-logo" id="edit-flight">
<img class="trash-logo" alt="trash logo" src="http://localhost/Flight-System-Website/client/assets/trash.svg" />
</td>
</tr>`;

getFlightsInfos();
