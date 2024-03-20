const fetchData = () => {
    const url = 'http://localhost/Flight-System-Website/server/landing-page/profile-page.php'; 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => {
            console.error(error);
        });
};

const displayData = (data) => {
    const tab1Table = document.getElementById('tab1-table');
    const tab2Table = document.getElementById('tab2-table');

    tab1Table.innerHTML = "";
    tab2Table.innerHTML = "";

    tab1Table.innerHTML += `
        <table>
            <thead>
                <tr>
                    <th>Preferences</th>
                    <th>Bookings of Flights</th>
                </tr>
            </thead>
            <tbody id="tab1-results-body">
                <tr>
                    <td>${data.profile_data.preferences}</td>
                    <td>${renderBookings(data.booking_data)}</td>
                </tr>
            </tbody>
        </table>`;

    tab2Table.innerHTML += `
        <table>
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Preferences</th>
                </tr>
            </thead>
            <tbody id="tab2-results-body">
                <tr>
                    <td>${data.profile_data.address}</td>
                    <td>${data.profile_data.phone_number}</td>
                    <td>${data.auth_data.username}</td>
                    <td>${data.auth_data.email}</td>
                    <td>${data.auth_data.password}</td>
                    <td>${data.profile_data.first_name}</td>
                    <td>${data.profile_data.last_name}</td>
                    <td>${data.profile_data.gender}</td>
                    <td>${data.profile_data.preferences}</td>
                </tr>
            </tbody>
        </table>`;
};

const renderBookings = (bookings) => {
    return bookings.map(booking => `
        <p>Seat Number: ${booking.seat_number}, Booking Date: ${booking.booking_date}, Payment Status: ${booking.payment_status}</p>
    `).join('');
};

fetchData();
