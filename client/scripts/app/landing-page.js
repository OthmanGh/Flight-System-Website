const from = document.getElementById('searchFlight-form');
const departureAirport = document.getElementById('departure-airport');
const arrivalAirport = document.getElementById('arrival-airport');
const departureDate = document.getElementById('departure-date');
const arrivalDate = document.getElementById('arrival-date');
const passengers = document.getElementById('passengers');
const searchFlightsContainer = document.getElementById('search-result-container');

const clearSearchInputs = () => {
  departureAirport.value = '';
  arrivalAirport.value = '';
  departureDate.value = '';
  arrivalDate.value = '';
  passengers.value = '';
};

//   $destination = $_POST['destination'];
// $departure_date = $_POST['departure_date'];
// $arrival_date = $_POST['arrival_date'];
// $price = $_POST['price'];


// $query = $mysqli->prepare("SELECT destination, departure_date, arrival_date, price FROM flights WHERE departure_date>=? AND arrival_date <=?");
// $query->bind_param('ss', $departure_date, $arrival_date);
// $query->execute();
// $query->store_result();
// $query->bind_result($destination, $departure_date, $arrival_date, $

from.addEventListener("submit",(e)=>{
  e.preventDefault();
  searchFlights();
});

const searchFlights = () => {
  const url = 'http://localhost/Flight-System-Website/server/landing-page/search-flights.php';
  const formatData = new FormData();

  formatData.append('departure_airport', departureAirport.value);
  formatData.append('arrival_airport', arrivalAirport.value);
  formatData.append('departure_date', departureDate.value);
  formatData.append('arrival_date', arrivalDate.value);

  const options={
    method: "POST",
    body:formatData

  }
  console.log(formatData);

  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayFlights(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const displayFlights = (data) => {
  searchFlightsContainer.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Departure Airport</th>
          <th>Arrival Airport</th>
          <th>Departure Date</th>
          <th>Return Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody id="search-results-body">
      </tbody>
    </table>`;

  const searchResultsBody = document.getElementById('search-results-body');
  searchResultsBody.innerHTML="";
  data.flights.forEach((item) => {
    searchResultsBody.innerHTML += renderSearch(item);
  });
};

const renderSearch = (item) => {
  return `
    <tr class="search-results j-s__around">
      <td>${item.departure_airport}</td>
      <td>${item.arrival_airport}</td>
      <td>${item.departure_date}</td>
      <td>${item.arrival_date}</td>
      <td>${item.price}</td>
    </tr>`;
};

function toggleTab(tabIndex) {
  let tabs = document.getElementsByClassName('tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }
  tabs[tabIndex].style.display = 'block';

  // Remove the 'active-tab-button' class from all buttons
  let buttons = document.getElementsByClassName('tab-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active-tab-button');
  }

  // Add the 'active-tab-button' class to the clicked button
  buttons[tabIndex].classList.add('active-tab-button');
}

toggleTab(0);

console.log(localStorage.getItem('id'));
