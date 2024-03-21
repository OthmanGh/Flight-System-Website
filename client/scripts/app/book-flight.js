const result_flights = document.getElementById("result_flights"); // Container
// const matching_flights = JSON.parse(localStorage.getItem("matching_flights"));
const matching_flights = {
    flights: [
        {
            departureAirport: "JFK",
            arrivalAirport: "LAX",
            departureDate: "2024-04-01",
            returnDate: "2024-04-05",
            price: "$300"
        },
        {
            departureAirport: "LHR",
            arrivalAirport: "CDG",
            departureDate: "2024-04-02",
            returnDate: "2024-04-06",
            price: "£250"
        }
    ]
};

console.log(matching_flights);

if (matching_flights && matching_flights.flights && Array.isArray(matching_flights.flights)) {

    // Display matched flights
    const displayFlights = (matching_flights) => {
        result_flights.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Departure Airport</th>
                        <th>Arrival Airport</th>
                        <th>Departure Date</th>
                        <th>Return Date</th>
                        <th>Price</th>
                        <th>Booking</th>
                    </tr>
                </thead>
                <tbody id="search-results-body">
                    <!-- Flight details will be populated here -->
                </tbody>
            </table>`;

        const searchResultsBody = document.getElementById('search-results-body');
        searchResultsBody.innerHTML = "";

        matching_flights.flights.forEach((item) => {
            // Render flight details here using appropriate logic
            searchResultsBody.innerHTML += `<tr>
                <td>${item.departureAirport}</td>
                <td>${item.arrivalAirport}</td>
                <td>${item.departureDate}</td>
                <td>${item.returnDate}</td>
                <td>${item.price}</td>
                <td><button>Book now</button></td>
            </tr>`;
        });
    };

    // Call displayFlights function to render matched flights
    displayFlights(matching_flights);
} else {
    console.error("Invalid or missing 'flights' property in matched_flights or no data found in local storage for 'matching_flights'");
}
