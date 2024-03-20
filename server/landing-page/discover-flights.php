<?php

include('../connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");


$query = $mysqli->prepare("SELECT departure_airport, arrival_airport, departure_date, arrival_date,price FROM flights");
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if($num_rows == 0) {
    $response["status"] = "No Flights";
}else{
    $allFlights = [];
    $query->bind_result($departure_airport, $arrival_airport, $departure_date, $arrival_date, $price);
    while($query->fetch()){
        $flight = [
            'departure_airport' => $departure_airport,
            'arrival_airport' => $arrival_airport,
            'departure_date' => $departure_date,
            'arrival_date' => $arrival_date,
            'price' => $price
        ];

        $allFlights[] = $flight;
    }

    $response["status"] = "Success";
    $response["allFlights"] = $allFlights;
}

return $response;