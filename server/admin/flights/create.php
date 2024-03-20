<?php
include("../../connection.php");

$destination =  $_POST['destination'];
$departure_date = $_POST['departure_date'];
$arrival_date = $_POST['arrival_date'];
$departure_airport = $_POST['departure_airport'];
$arrival_airport = $_POST['arrival_airport'];
$price = $_POST['price'];
$airline = $_POST['airline'];


$flight = $mysqli->prepare('INSERT INTO flights(destination, departure_date, arrival_date, departure_airport, arrival_airport, price, airline) VALUES (?,?,?,?,?,?,?)');

$flight->bind_param('sssssds', $destination, $departure_date, $arrival_date, $departure_airport, $arrival_airport, $price, $airline);

if ($flight->execute()) {

    $query = $mysqli->prepare('SELECT * FROM flights');

    $query->execute();

    $result = $query->get_result();

    $flights = array();
    while ($row = $result->fetch_assoc()) {
        $flights[] = $row;
    }
    $response['status'] = 'Success';
    $response['message'] = 'data successfully inserted';
    $response['flights'] = $flights;
} else {
    $response['status'] = 'Failed';
}

echo json_encode($response);
