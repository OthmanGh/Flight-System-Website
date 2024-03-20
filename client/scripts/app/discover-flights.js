const discoverFlightsContainer=document.getElementById("discover-flights-container");
const localFlightId="";
      const getAllFlights = () => {
        fetch("http://localhost/Flight-System-Website/server/landing-page/discover-flights.php", {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            
            console.log(data);
            displayAllFlights(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      const displayAllFlights = (data) => {
        discoverFlightsContainer.innerHTML = `
          <table>
            <thead>
              <tr>
                <th>Departure Airport</th>
                <th>Arrival Airport</th>
                <th>Departure Date</th>
                <th>Return Date</th>
                <th>Price</th>
                <th>Book Now</th>
              </tr>
            </thead>
            <tbody id="discover-flights-Body">
            </tbody>
          </table>`;
      
        const discoverFlightsBody = document.getElementById('discover-flights-Body');
        discoverFlightsBody.innerHTML="";
        data.allFlights.forEach((item) => {
          discoverFlightsBody.innerHTML += renderFlights(item);
        });
      }

      const renderFlights = (item) => {
        return `
          <tr class="search-results j-s__around">
            <td>${item.departure_airport}</td>
            <td>${item.arrival_airport}</td>
            <td>${item.departure_date}</td>
            <td>${item.arrival_date}</td>
            <td>${item.price}</td>
            <td><button class="btn">Book Now</button></td>
          </tr>`;
      }
getAllFlights();