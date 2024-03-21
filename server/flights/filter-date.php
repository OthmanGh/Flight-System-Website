<?php

include("../connection.php");

$destination = $_POST['destination'];
$departure_date = $_POST['departure_date'];
$arrival_date = $_POST['arrival_date'];
$price = $_POST['price'];


$query = $mysqli->prepare("SELECT destination, departure_date, arrival_date, price FROM flights WHERE departure_date>=? AND arrival_date <=?");
$query->bind_param('ss', $departure_date, $arrival_date);
$query->execute();
$query->store_result();
$query->bind_result($destination, $departure_date, $arrival_date, $price);
$num_rows = $query->num_rows();
if ($num_rows == 0) {
        $response['status'] = 'fail';
        $response['message'] = 'No flights match your filtering at the moment';
    } else {
        $flights = [];
        while ($query->fetch()) {
            $flight = [
                'destination' => $destination,
                'departure_date' => $departure_date,
                'arrival_date' => $arrival_date,
                'price' => $price
            ];
            $flights[] = $flight;
        }
        $response['status'] = 'success';
        $response['flights'] = $flights;
    }

echo json_encode($response);






    