<?php
include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");



function searchFlights(){
    $query = $mysqli->prepare('select departure_airport, arrival_airport, departure_date,  arrival_date FROM flights WHERE departure_airport=?, arrival_airport=?, departure_date=?,  arrival_date=?');
    $query->bind_param('ssss', $departure_airport, $arrival_airport, $departure_date, $arrival_date);
    $query->execute();
    $query->store_result();
    $query->bind_result($departure_airport, $arrival_airport, $departure_date, $arrival_date);
    $query->fetch();
    $num_rows = $query->num_rows();

    if($num_rows == 0) {
        $response["status"] = "No Flights";
    }else{
        $flights = [];
        $query->bind_result($departure_airport, $arrival_airport, $departure_date, $arrival_date);
        while($query->fetch()){
            $flight = [
                'departure_airport' => $departure_airport,
                'arrival_airport' => $arrival_airport,
                'departure_date' => $departure_date,
                'arrival_date' => $arrival_date
            ];

            $flights[] = $flight;
        }

        $response["status"] = "Success";
        $response["flights"] = $flights;
    }

    return $response;
}