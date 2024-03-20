<?php
include("../../connection.php");

$flight_id = $_GET['flight_id'];

$destination =  $_POST['destination'];
$departure_date = $_POST['departure_date'];
$arrival_date = $_POST['arrival_date'];
$departure_airport = $_POST['departure_airport'];
$arrival_airport = $_POST['arrival_airport'];
$price = $_POST['price'];
$airline = $_POST['airline'];

$flight = $mysqli->prepare('UPDATE flights SET destination=?, departure_date=?, arrival_date=?, departure_airport=?, arrival_airport=?, price=?, airline=? WHERE flight_id=?');

$flight->bind_param('sssssdsi', $destination, $departure_date, $arrival_date, $departure_airport, $arrival_airport, $price, $airline, $flight_id);

if ($flight->execute()) {
    $response['status'] = 'Success';
    $response['message'] = 'Data successfully updated';
} else {
    $response['status'] = 'Failed';
}

echo json_encode($response);
