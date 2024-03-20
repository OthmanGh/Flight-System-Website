<?php
include('../connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$departure_airport = $_POST['departure_airport'];
$arrival_airport = $_POST['arrival_airport'];
$departure_date = $_POST['departure_date'];
$arrival_date = $_POST['arrival_date'];

$query = $mysqli->prepare('SELECT departure_airport, arrival_airport, departure_date, arrival_date, price FROM flights WHERE departure_airport=? AND arrival_airport=? AND departure_date=? AND arrival_date=?');
$query->bind_param('ssss', $departure_airport, $arrival_airport, $departure_date, $arrival_date);
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

$response = [];

if ($num_rows == 0) {
    $response["status"] = "No Flights";
} else {
    $flights = [];
    $query->bind_result($departure_airport, $arrival_airport, $departure_date, $arrival_date, $price);
    while ($query->fetch()) {
        $flight = [
            'departure_airport' => $departure_airport,
            'arrival_airport' => $arrival_airport,
            'departure_date' => $departure_date,
            'arrival_date' => $arrival_date,
            'price' => $price
        ];

        $flights[] = $flight;
    }

    $response["status"] = "Success";
    $response["flights"] = $flights;
}

echo json_encode($response);
?>
