<?php

include ("../connection.php");

$destination = $_POST ['destination'] . '%';
$departure_date = $_POST['departure_date'];
$arrival_date = $_POST['arrival_date'];
$price = $_POST['price'];


$query = $mysqli -> prepare('SELECT destination, departure_date, arrival_date, price FROM flights Where destination LIKE ?');
$query -> bind_param('s', $destination);
$query -> execute();
$query -> store_result();
$num_rows = $query -> num_rows();
if ($num_rows == 0) {
    $response['status'] = 'fail';
    $response['message'] = 'No flights to this destination are available at the moment';
} else {
    $flights = [];
    $query -> bind_result($destination, $departure_date, $arrival_date, $price);
    while ($query -> fetch()){
        $flight = [
            'destination' => $destination,
            'departure_date' => $departure_date,
            'arrival_date' => $arrival_date,
            'price' => $price
        ];
        $flights[] = $flight;}
    $response['status'] = 'succes';
    $response['flights'] = $flights;

}

echo json_encode($response);